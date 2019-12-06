import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './main/quiz/quiz.component';
import { OfferComponent } from './main/offer/offer.component';
import { ValuesComponent } from './main/values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    QuizComponent,
    OfferComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
