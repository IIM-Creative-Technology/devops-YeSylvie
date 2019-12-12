import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '@ngx-share/core';
import { NgwWowModule } from 'ngx-wow';
import { SafePipe } from './safe.pipe';
import { CookieService } from 'ngx-cookie-service';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './main/quiz/quiz.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { OfferComponent } from './main/offer/offer.component';
import { ValuesComponent } from './main/values/values.component';
import { DiscoverComponent } from './main/discover/discover.component';
import { SocialWallComponent } from './main/social-wall/social-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    QuizComponent,
    AboutUsComponent,
    OfferComponent,
    ValuesComponent,
    DiscoverComponent,
    SocialWallComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ShareModule,
    NgwWowModule,
    ClipboardModule
  ],
  providers: [ CookieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
