import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-wall',
  templateUrl: './social-wall.component.html',
  styleUrls: ['./social-wall.component.scss']
})
export class SocialWallComponent implements OnInit {

  private showShareButtons: boolean;
  private articles: Array<object>;
  private hideme = []
  
  constructor() { }

  ngOnInit() {
    this.showShareButtons = false;
    this.articles = [
      {
        id: 0,
        titre: "Title 1",
        source: "instagram",
        nom_img: "https://i.ytimg.com/vi/rDs3o1uLEdU/maxresdefault.jpg",
        date: "15 février 2019",
        tag: ["truc", "machin", "chouette"]
      },
      {
        id: 1,
        titre: "Title 1",
        source: "instagram",
        nom_img: "https://i.ytimg.com/vi/rDs3o1uLEdU/maxresdefault.jpg",
        date: "15 février 2019",
        tag: ["truc", "machin", "chouette"]
      },
      {
        id: 2,
        titre: "Title 1",
        source: "instagram",
        nom_img: "https://i.ytimg.com/vi/rDs3o1uLEdU/maxresdefault.jpg",
        date: "15 février 2019",
        tag: ["truc", "machin", "chouette"]
      }
    ];
  }

  show() {
    this.showShareButtons = !this.showShareButtons
  }
}
