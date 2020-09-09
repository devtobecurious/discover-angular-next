import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-enter',
  templateUrl: './leave-enter.component.html',
  styleUrls: ['./leave-enter.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
       style({
         transform: 'translateX(-100%)',
         backgroundColor: 'blue'
       }),
       animate(500)
     ])
    ]) 
   ]
})
export class LeaveEnterComponent implements OnInit {
  prenoms: string[] = ['Choubi', 'Chewi', 'Chewbi'];

  constructor() { }

  ngOnInit(): void {
  }

  addOne() {
    this.prenoms.push('hello');
  }
}
