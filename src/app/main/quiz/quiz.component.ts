import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { trigger, style, animate, transition } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scaleY(0)', opacity: 1}),
          animate('500ms', style({transform: 'scaleY(0)', opacity: 0}))
        ])
      ],
    ),
    trigger(
      'socialWall', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0}))
        ])
      ],
    )
  ]
})
export class QuizComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  questions: Array<object> = [];
  currentIndex: number;
  notAttempted: any;
  correct: any;
  currentQuestionSet: any;
  answers: Array<string> = [];
  articles: Array<object> = [];
  currentAnswer: string;
  isAnswerSelected: boolean = false;
  nbAnswers: number = 0;
  showSocialWall: boolean = false;
  offset: number = 0;
  showQuiz: boolean = true;
  show:boolean = true;
  
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.questions = [
      {
        id: 1,
        question: "Pour toi l'Art c'est : (1/4)",
        option: [
          { optionid: 1, name: "Peintures, toiles et musées", tag: "peinture" },
          {
            optionid: 2,
            name: "Instants figés dans le temps avec la photographie",
            tag: "photographie"
          },
          {
            optionid: 3,
            name: "Crayons et carnets blanc pour le dessin",
            tag: "dessin"
          },
          {
            optionid: 4,
            name: "Belles lettres, belles phrases avec la littérature",
            tag: "littérature"
          }
        ],
        selected: 0
      },
      {
        id: 2,
        question: "Tu es plutôt… (2/4)",
        option: [
          { optionid: 1, name: "Un(e) vrai(e) gamer(euse) !", tag: "game" },
          { optionid: 2, name: "Branché(e) musique", tag: "musique" },
          { optionid: 3, name: "Team Otaku", tag: "otaku" },
          { optionid: 4, name: "Séries et cocooning", tag: "serie" }
        ],
        selected: 0
      },
      {
        id: 3,
        question: "Si je te dis arts du spectacle, tu me réponds ? (3/4)",
        option: [
          {
            optionid: 1,
            name: "Salle noire, grand écran et pop corn : le cinéma quoi !",
            tag: "cinema"
          },
          {
            optionid: 2,
            name: "Un(e) magicien(ne) ne dévoile jamais ses secrets.. ",
            tag: "magie"
          },
          {
            optionid: 3,
            name: "La danse pour avoir le rythme dans la peau ",
            tag: "danse"
          },
          {
            optionid: 4,
            name:
            "Classique, jazz, rock, rap,... La musique c'est le sang",
            tag: "musique"
          }
        ],
        selected: 0
      },
      {
        id: 4,
        question: "Ce que tu préfères dans l’Art c’est : (4/4)",
        option: [
          {
            optionid: 1,
            name: "Ne pas toujours comprendre ce que tu vois",
            tag: "abstrait"
          },
          {
            optionid: 2,
            name: "Ressentir plein d’émotions différentes",
            tag: "emotion"
          },
          {
            optionid: 3,
            name: "Comprendre tout de suite ce que tu vois",
            tag: "realisme"
          },
          {
            optionid: 4,
            name: "Qu'il soit spectaculaire",
            tag: "spectaculaire"
          }
        ],
        selected: 0
      }
    ];
    
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }
  
  ngOnInit() {
    console.log(this.nbAnswers)
   let isThereACookie = this.cookieService.check('user_choices');
   if(isThereACookie) {
     console.log("Un cookie de reposes est présent")
     let cookieData = this.cookieService.get('user_choices');
      this.answers = cookieData.split('|')
      this.submit();
      this.nbAnswers = 4;
      this.show = !this.show;
   } 
  }
  setAnswser(x) {
    this.isAnswerSelected = true;
    this.currentAnswer = x;
    if(this.answers.length == 3) this.answers[3] = x;
    console.log(x);
  }
  next() {
    this.currentIndex = this.currentIndex + 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
    this.answers.push(this.currentAnswer);
    this.nbAnswers++;
    this.isAnswerSelected = false;
    console.log(this.nbAnswers);
    
  }
  prev() {
    this.currentIndex = this.currentIndex - 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
    this.answers.pop();
    this.nbAnswers--;
    this.currentAnswer = "";
    this.isAnswerSelected = false;
    console.log(this.answers);
  }
  submit() {
    this.showQuiz = false;
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
    // URL pour le local : http://localhost/hommage/api/getSocialWall.php
    this.http.post("https://www.euphoriart.fr/hommage/getSocialWall.php", this.answers).subscribe( 
      data => {
        let length = Object.keys(data).length;
        console.log(length);
        for (let index = 0; index < length; index++) {
          this.articles.push(data[index]) 
          
        }
        console.log(this.articles)
      },
      error => {
        console.log("Error : ", error);
      }) ;
    let now = new Date();
    let time = now.getTime();
    time += 3600*1000;
    now.setTime(time);
    let cookieData: string = this.answers.join('|');
    this.cookieService.set('user_choices', cookieData, 1);
    this.cookieValue = this.cookieService.get('user_choices');
    console.log(this.cookieValue);
  }
  restart() {
    this.answers = [];
    this.articles = [];
    this.isAnswerSelected = false;
    this.nbAnswers = 1;
    this.show = true;
    this.cookieService.delete('user_choices')
  }
}