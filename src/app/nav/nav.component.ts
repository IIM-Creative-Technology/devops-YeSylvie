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
        nav.style.boxShadow = '0px 1px 2px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
        if (!nav.classList.contains('scrolled')) {
          nav.classList.add('scrolled');
          logo.setAttribute('src', '../../assets/logos/logo_desktop.svg');
          hamburger.setAttribute('src', '../../assets/icons/hamburger.svg');
        }
      } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
        if (nav.classList.contains('scrolled')) {
          nav.classList.remove('scrolled');
          hamburger.setAttribute('src', '../../assets/icons/hamburger.svg');
        }
      }
});
  }
}
