import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-callback',
  templateUrl: './with-callback.component.html',
  styleUrls: ['./with-callback.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ backgroundColor: 'green', color: 'white' })),
      state('close', style({ backgroundColor: 'white', color: 'black' })),
      transition('void => open', animate('1s'))
    ])
  ]
})
export class WithCallbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openCloseStart(event: AnimationEvent) {
    console.log('begin animation', event);
  }

  openCloseEnd(event: AnimationEvent) {
    console.log('end animation', event);
  }

}
