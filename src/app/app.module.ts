import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '@ngx-share/core';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ShareModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
