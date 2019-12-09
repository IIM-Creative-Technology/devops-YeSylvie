import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"]
})

export class QuizComponent implements OnInit {
   questions: Array<object> = [];
   currentIndex: number;
   notAttempted: any;
   correct: any;
   currentQuestionSet: any;
   answers: Array<string> = [];
   currentAnswer: string;
   isAnswerSelected: boolean = false;
   nbAnswers: number = 1;

  ngOnInit() { 
    this.getResponse();
  }

  constructor(private http: HttpClient) {
    // JSON DATA QUESTIONS/RESPONSE

    

    this.questions = [
      {
        id: 1,
        question: "Pour toi l'Art c'est :",
        option: [
          { optionid: 1, name: "Peintures, toiles et musées", tag : "peinture" },
          { optionid: 2, name: "Instants figés dans le temps avec la photographie", tag : "photographie" },
          { optionid: 3, name: "Crayons et carnets blanc pour le dessin", tag : "dessin" },
          { optionid: 4, name: "Belles lettres, belles phrases avec la littérature", tag : "littérature" }
        ],
        selected: 0
      },
      {
        id: 2,
        question: "Tu es plutôt… ",
        option: [
          { optionid: 1, name: "Un(e) vrai(e) gamer(euse) !", tag : "game" },
          { optionid: 2, name: "Branché(e) musique", tag : "musique" },
          { optionid: 3, name: "Team Otaku", tag : "otaku" },
          { optionid: 4, name: "Séries et cocooning", tag : "serie" }
        ],
        selected: 0
      },
      {
        id: 3,
        question: "Si je te dis arts du spectacle, tu me réponds ?",
        option: [
          { optionid: 1, name: "Salle noire, grand écran et pop corn : le cinéma quoi !", tag : "cinema" },
          { optionid: 2, name: "Un(e) magicien(ne) ne dévoile jamais ses secrets.. ", tag : "magie" },
          { optionid: 3, name: "La danse pour avoir le rythme dans la peau ", tag : "danse" },
          { optionid: 4, name: "Classique, jazz, blues, rock, rap,... La musique c'est le sang", tag : "musique" }
        ],
        selected: 0
      },
      {
        id: 4,
        question: "Ce que tu préfères dans l’Art c’est :",
        option: [
          { optionid: 1, name: "Ne pas toujours comprendre ce que tu vois", tag : "abstrait" },
          { optionid: 2, name: "Ressentir plein d’émotions différentes", tag : "emotion" },
          { optionid: 3, name: "Comprendre tout de suite ce que tu vois", tag : "realisme" },
          { optionid: 4, name: "Qu'il soit spectaculaire", tag : "spectaculaire" }
        ],
        selected: 0
      }
    ];

    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

  getResponse() {
    this.http.post("https://euphoriart.fr/hommage/getSocialWall.php", this.answers).subscribe( response => {
      console.log(response);
    } );
  }

  setAnswser(x) {
    this.isAnswerSelected = true;
    this.currentAnswer = x;
    console.log(this.isAnswerSelected);
  }


  next() {
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestionSet = this.questions[this.currentIndex];
      this.answers.push(this.currentAnswer);
      this.nbAnswers ++;
      this.isAnswerSelected = false;
      console.log(this.answers)
  }

  prev() {
    this.currentIndex = this.currentIndex - 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
    this.answers.pop();
    this.nbAnswers --;
    this.currentAnswer = "";
  }

  submit() {
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }
}
