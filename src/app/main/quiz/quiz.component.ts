import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: any;
  currentIndex: number;
  notAttempted: any;
  correct: any;
  currentQuestionSet: any;
  start = false;
  gameover = false;
  buttonname = 'Play';

  ngOnInit() {
  }

  constructor() {

    // JSON DATA QUESTIONS/RESPONSE

    this.questions = [
      {
        id: 1,
        question: 'Quel est ton dessert favori ?',
        option: [
          {optionid: 1, name: 'Tiramisu'},
          {optionid: 2, name: 'Glace'},
          {optionid: 3, name: ' Perle de coco'},
          {optionid: 4, name: ' Gateau au chocolat'}
        ],
        selected: 0
      },
      {
        id: 2,
        question: 'Quel est ton sport favori ?',
        option: [
          {optionid: 1, name: 'Tiramisu'},
          {optionid: 2, name: 'Glace'},
          {optionid: 3, name: ' Perle de coco'},
          {optionid: 4, name: ' Gateau au chocolat'}
        ],
        selected: 0
      },
      {
        id: 3,
        question: 'Quel est ton acteur favori ?',
        option: [
          {optionid: 1, name: 'Tiramisu'},
          {optionid: 2, name: 'Glace'},
          {optionid: 3, name: ' Perle de coco'},
          {optionid: 4, name: ' Gateau au chocolat'}
        ],
        selected: 0
      },
      {
        id: 4,
        question: 'Quel est ton groupe favori ?',
        option: [
          {optionid: 1, name: 'Tiramisu'},
          {optionid: 2, name: 'Glace'},
          {optionid: 3, name: ' Perle de coco'},
          {optionid: 4, name: ' Gateau au chocolat'}
        ],
        selected: 0
      }
    ];

    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

   next() {
     this.currentIndex = this.currentIndex + 1;
     this.currentQuestionSet = this.questions[this.currentIndex];
   }

   prev() {
    this.currentIndex = this.currentIndex + 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

   submit() {
   }

  }




