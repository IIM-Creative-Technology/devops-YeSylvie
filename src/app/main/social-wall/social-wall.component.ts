import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-social-wall',
  templateUrl: './social-wall.component.html',
  styleUrls: ['./social-wall.component.scss'],
  animations: [
    trigger(
      'showShare', [
        transition(':enter', [
          style({transform: 'translateY(50%)', opacity: 0}),
          animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('200ms', style({transform: 'translateY(50%)', opacity: 0}))
        ])
      ],
    )
  ]
})
export class SocialWallComponent implements OnInit {
  @Input() articles: Array<string>;

   showShareButtons: boolean;
   hideme = []
  
  constructor() { }

  ngOnInit() {
    this.showShareButtons = false;
    
  }

  show(x) {
    let currentState = this.hideme[x]
    console.log(currentState)
    this.hideme.fill(false)
    this.hideme[x] = !currentState;
  }

  getTwitterUrl(x:string) {
    return "'" + x + "'";
  }
}
