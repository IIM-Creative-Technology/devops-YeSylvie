<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');

//Connection à la BDD 
include('connect.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);

var_dump($request);

$str = implode(",", $request);

$tags = str_replace(",", "','", $str);;

$json = []; 
$x = 0;

        
$requete = $bdd -> query("SELECT DISTINCT sw.id, sw.titre, sw.source, sw.url, sw.nom_img, sw.date 
FROM tag t
INNER JOIN social_wall_tag swt ON t.id=swt.tag_id
INNER JOIN social_wall sw ON sw.id=swt.social_wall_id   
WHERE t.libelle_tag IN ('$tags') ");  

while($reponse = $requete->fetch()) {

        $json[$x]['id'] = $reponse[0];
        $json[$x]['titre'] = $reponse[1];
        $json[$x]['source'] = $reponse[2];
        $json[$x]['url'] = $reponse[3];
        $json[$x]['nom_img'] = $reponse[4];
        $json[$x]['date'] = $reponse[5];
        $x++; 
}

echo json_encode(array_values($json));


?>