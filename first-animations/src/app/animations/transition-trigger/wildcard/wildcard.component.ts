import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: 'green',
        opacity: 1,
        height: '200px',
        color: 'white'
      })),
      state('close', style({
        backgroundColor: 'white',
        opacity: 1,
        height: '50px',
        color: 'black'
      })),
      transition('open => *', [
        animate('1s')
      ]),
      transition('* => close', [
        animate('0.3s')
      ])
    ])
  ]
})
export class WildcardComponent implements OnInit {
  @Input()
  state: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
