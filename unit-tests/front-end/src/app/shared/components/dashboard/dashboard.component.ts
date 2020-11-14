import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type wookie = { name: string };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() wookie: wookie;
  @Output() selected = new EventEmitter<wookie>();


  constructor() { }

  ngOnInit(): void {
  }

  click(): void {
    this.selected.emit(this.wookie);
  }

}
