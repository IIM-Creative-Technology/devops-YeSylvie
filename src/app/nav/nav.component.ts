import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private showBackgroundNav = false;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', function() {
      const nav = document.getElementById('nav');
      const logo = this.document.getElementById('logo');
      const hamburger = this.document.getElementById('hamburger');

      if (this.window.scrollY > 90) {
        nav.style.backgroundColor = 'white';
        if (!nav.classList.contains('scrolled')) {
          nav.classList.add('scrolled');
          logo.setAttribute('src', '../../assets/logos/logo_desktop.svg');
          hamburger.setAttribute('src', '../../assets/icons/hamburger.svg');
        }
      } else {
        nav.style.backgroundColor = 'transparent';
        if (nav.classList.contains('scrolled')) {
          nav.classList.remove('scrolled');
          hamburger.setAttribute('src', '../../assets/icons/hamburger.svg');
        }
      }
});
  }
}
