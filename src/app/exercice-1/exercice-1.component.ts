import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { DirectionModel } from './shared/direction.model';

@Component({
  selector: 'app-exercice-1',
  templateUrl: './exercice-1.component.html'
})
export class Exercice1Component implements OnInit {

  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  // @HostBinding('style.color') color: string;
  // @HostListener('window:keydown', ['$event']) windowClick($event) {
  //   const key = $event.key;
  //   console.log($event.key);
  // }

  constructor() { }

  ngOnInit() { }

}

