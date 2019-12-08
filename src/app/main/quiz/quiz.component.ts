import { Component, OnInit, HostListener } from "@angular/core";

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

  ngOnInit() {}

  constructor() {
    // JSON DATA QUESTIONS/RESPONSE

    

    this.questions = [
      {
        id: 1,
        question: "Quel est ton dessert favori ?",
        option: [
          { optionid: 1, name: "Tiramisu" },
          { optionid: 2, name: "Glace" },
          { optionid: 3, name: "Perle de coco" },
          { optionid: 4, name: "Gateau au chocolat" }
        ],
        selected: 0
      },
      {
        id: 2,
        question: "Quel est ton sport favori ?",
        option: [
          { optionid: 1, name: "foot" },
          { optionid: 2, name: "tennis" },
          { optionid: 3, name: "eff" },
          { optionid: 4, name: "ze" }
        ],
        selected: 0
      },
      {
        id: 3,
        question: "Quel est ton acteur favori ?",
        option: [
          { optionid: 1, name: "zef" },
          { optionid: 2, name: "zae" },
          { optionid: 3, name: "zae" },
          { optionid: 4, name: "fffff" }
        ],
        selected: 0
      },
      {
        id: 4,
        question: "Quel est ton groupe favori ?",
        option: [
          { optionid: 1, name: "vzzzzee" },
          { optionid: 2, name: "ez" },
          { optionid: 3, name: "Perle de coco" },
          { optionid: 4, name: "Gateau audz chocolat" }
        ],
        selected: 0
      }
    ];

    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
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
