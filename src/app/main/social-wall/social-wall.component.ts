import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-wall',
  templateUrl: './social-wall.component.html',
  styleUrls: ['./social-wall.component.scss']
})
export class SocialWallComponent implements OnInit {

   showShareButtons: boolean;
   articles: Array<object>;
   hideme = []
  
  constructor() { }

  ngOnInit() {
    this.showShareButtons = false;
    this.articles = [
      {
        id: 0,
        titre: "Title 1",
        url: "https://fr.wikipedia.org/wiki/Bob_Ross", 
        source: "Insta",
        nom_img: "https://i.ytimg.com/vi/rDs3o1uLEdU/maxresdefault.jpg",
        date: "15 février 2019",
        tag: ["truc", "machin", "chouette"]
      },
      {
        id: 1,
        titre: "Title 1",
        source: "FB",
        url: "https://fr.wikipedia.org/wiki/Bob_Ross", 
        nom_img: "https://i.ytimg.com/vi/rDs3o1uLEdU/maxresdefault.jpg",
        date: "15 février 2019",
        tag: ["truc", "machin", "chouette"]
      },
      {
        id: 2,
        titre: "Title 1",
        source: "Twitter",
        url: "https://fr.wikipedia.org/wiki/Bob_Ross", 
        nom_img: "https://i.ytimg.com/vi/rDs3o1uLEdU/maxresdefault.jpg",
        date: "15 février 2019",
        tag: ["truc", "machin", "chouette"]
      }
    ];
  }

  show(x) {
    let currentState = this.hideme[x]
    console.log(currentState)
    this.hideme.fill(false)
    this.hideme[x] = !currentState;
  }
}
