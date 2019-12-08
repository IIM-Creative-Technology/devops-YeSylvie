import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-wall',
  templateUrl: './social-wall.component.html',
  styleUrls: ['./social-wall.component.scss']
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
}
