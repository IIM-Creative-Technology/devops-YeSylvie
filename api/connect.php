<?php
    try {
        
        $bdd = new PDO('mysql:host=euphoriaaqmybdd.mysql.db;dbname=euphoriaaqmybdd;charset=utf8', 'euphoriaaqmybdd', 'Studiose2019', array(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION));
        
        // En local
        // $bdd = new PDO('mysql:host=localhost;dbname=hommage;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION));
    }

    catch (PDOException $e) {
        die('Erreur : ' . $e->getMessage());
    } 
?>