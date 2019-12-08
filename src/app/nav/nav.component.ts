import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private showBackgroundNav: boolean = false;

  constructor() { }

  ngOnInit() {
    
    window.addEventListener('scroll', function() {
      let nav = document.getElementById('nav');
      let logo = this.document.getElementById('logo');
      
      if(this.window.scrollY > 90) {
        nav.style.backgroundColor = 'white';
        if(!nav.classList.contains('scrolled')) {
          nav.classList.add('scrolled')
          logo.setAttribute("src", "../../assets/logos/logo_desktop.svg");
        }
      }

      else{
        nav.style.backgroundColor = 'transparent'
        if(nav.classList.contains('scrolled')) {
          nav.classList.remove('scrolled')
        }
      }
});
  }
}
