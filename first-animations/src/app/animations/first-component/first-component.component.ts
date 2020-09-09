import { Component, OnInit, Input } from '@angular/core';
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
      state('open', style({
        backgroundColor: 'red',
        height: '200px',
        opacity: 1
      })),
      state('close', style({
        backgroundColor: 'blue',
        height: '100px',
        opacity: 0.5
      })),
      transition('open =>  close',
        animate('1s')
      ),
      transition('close => open',
        animate('0.5s')
      )
    ])
  ]
})
export class FirstComponentComponent implements OnInit {
  @Input()
  state: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
