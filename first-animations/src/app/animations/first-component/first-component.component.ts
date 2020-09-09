import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  animations: [
    trigger('openClose', [
      state('open1', style({
        backgroundColor: 'red',
        height: '200px',
        opacity: 1
      })),
      state('close1', style({
        backgroundColor: 'blue',
        height: '100px',
        opacity: 0.5
      })),
      transition('open1 =>  close1',
        animate('1s')
      ),
      transition('close1 =>    open1',
        animate('0.5s')
      )
    ])
  ]
})
export class FirstComponentComponent implements OnInit {
  state: 'close1' | 'open1' = 'close1';

  constructor() { }

  ngOnInit(): void {
  }

  changeState(): void {
    if (this.state === 'close1') {
      this.state = 'open1';
    } else {
      this.state = 'close1';
    }
  }

}
