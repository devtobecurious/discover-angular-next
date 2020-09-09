import { trigger, style, state, transition, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-three-states-wildcard',
  templateUrl: './three-states-wildcard.component.html',
  styleUrls: ['./three-states-wildcard.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
          backgroundColor: 'blue',
          color: 'white',
          height: '200px'
      })),
      state('close', style({
        backgroundColor: 'green',
          color: 'white', 
          height: '50px'
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('2s', style({
          backgroundColor: 'black',
          fontSize: '30px'
        }))
      ]),
      transition('* => *', [
        animate('1s', 
          style({
            opacity: '*'
          })
        ),
      ]),
    ])
  ]
})
export class ThreeStatesWildcardComponent implements OnInit {
  @Input()
  state: string;

  constructor() { }

  ngOnInit(): void {
  }

}
