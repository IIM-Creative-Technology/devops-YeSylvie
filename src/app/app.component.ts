import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: any; // Les questions
  currentIndex: number; // Numéro de la page --> /4
  currentQuestionSet: any; // Numéro actuelle de la page
  start = false; //
  title = 'tete';

constructor() {

  // Question JSON DATA
this.questions = [
  {
    id: 1 ,
    question : 'Quel est ton dessert favori ?',
    reponse : [
      {reponseId: 1, reponseName: 'Tiramisu'},
      {reponseId: 2, reponseName: 'Glace'},
      {reponseId: 3, reponseName: 'Perle de coco'},
      {reponseId: 4, reponseName: 'Gateau au chocolat'},
    ],
    selected : 0,
  },
  {
    id: 2 ,
    question : 'Quel est ton sport favori ?',
    reponse : [
      {reponseId: 1, reponseName: 'Tennis'},
      {reponseId: 2, reponseName: 'Foot'},
      {reponseId: 3, reponseName: 'Basket'},
      {reponseId: 4, reponseName: 'Danse'},
    ],
    selected : 0,
  },
  {
    id: 3 ,
    question : 'Quel est ta saison préférée ?',
    reponse : [
      {reponseId: 1, reponseName: 'Automne'},
      {reponseId: 2, reponseName: 'Hiver'},
      {reponseId: 3, reponseName: 'Printemps'},
      {reponseId: 4, reponseName: 'Ete'},
    ],
    selected : 0,
  },
  {
    id: 4 ,
    question : 'Quel est ton film préféré ?',
    reponse : [
      {reponseId: 1, reponseName: 'Stars Wars'},
      {reponseId: 2, reponseName: 'Charlie et la chocolaterie'},
      {reponseId: 3, reponseName: 'Le roi Lion'},
      {reponseId: 4, reponseName: 'The ring'},
    ],
    selected : 0,
  },
];

this.currentIndex = 0 ;
this.currentQuestionSet = this.questions[this.currentIndex];
}

// Bouton Next
suivant() {
  this.currentIndex = this.currentIndex + 1; // On ajoute +1 à l'index quand on appui sur le bouton Suivant
  this.currentQuestionSet = this.questions[this.currentIndex];
}

// Bouton Envoyer
envoyer() {

}

// Bouton Commencer le Quiz
commencerQuiz() {
  this.currentIndex = 0;
  this.currentQuestionSet = this.questions[this.currentIndex];
}


}

