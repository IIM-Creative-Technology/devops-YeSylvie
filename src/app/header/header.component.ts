import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showCookie = false;
  
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    if(!this.cookieService.check('user_validate')) {
      this.showCookie = true;
    }
  }

  acceptCookie() {
    this.showCookie = false;
    this.cookieService.set('user_validate', 'Oooweeee', 365)
  }

}
