import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {

  private values: any;

  constructor() { }

  ngOnInit() {
    this.values = [
      {
        icon: '../../../assets/picto/Institution.svg',
        title: 'Des institutions délaissées',
        text: 'Malgré une augmentation de 7% de la fréquentation des musées en 2018, les internautes passent <strong>3 fois plus de temps en ligne</strong> que dans les musées.'
      },
      {
        icon: '../../../assets/picto/Digital.svg',
        title: 'Une présence digitale',
        text: "À l’heure de la révolution numérique, les <strong>nouvelles technologies</strong> ont radicalement changé notre façon de <strong>consommer</strong> l’art, mais aussi de la créer, voir a la recréer."
      },
      {
        icon: '../../../assets/picto/Emotions.svg',
        title: 'Des émotions positives',
        text: "Notre <strong>vision</strong> : faire renaître les émotions provoquées par l’art en proposant une sélection mettant en avant l’idée d’une <strong>nouvelle manière de consommer l’art.</strong>"
      }
    ]

  }

}
