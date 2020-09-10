import { WOOKIES } from './../../../models/wookies/mock-wookies';
import { trigger, transition, query, stagger, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
  animations: [
    trigger('filters', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({opacity: 0, width: '0px'}),
          stagger(50, [
            animate('300ms ease-out', style({opacity: 1, width: '*'}))
          ])
        ])
      ])
    ])
  ]
})
export class QueryComponent implements OnInit {
  wookies = WOOKIES;

  constructor() { }

  ngOnInit(): void {
  }

  search(searchItem: string) {
    this.wookies = WOOKIES.filter(item => item.surname.includes(searchItem));
  }
}
