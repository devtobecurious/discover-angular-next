import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-void',
  templateUrl: './void.component.html',
  styleUrls: ['./void.component.css'],
  animations: [
   trigger('flyInOut', [
     state('in', style({
       transform: 'translateX(0)'
     })),
     transition('void => *', [
      style({
        transform: 'translateX(-100%)',
        backgroundColor: 'blue'
      }),
      animate(500)
    ])
   ]) 
  ]
})
export class VoidComponent implements OnInit {
  prenoms: string[] = ['Choubi', 'Chewi', 'Chewbi'];

  constructor() { }

  ngOnInit(): void {
  }

  addOne() {
    this.prenoms.push('hello');
  }
}
