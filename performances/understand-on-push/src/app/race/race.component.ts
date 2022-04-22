import { Component, OnInit } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ponies: Array<PonyModel> = [{ id: 1, color: 'green' }, { id: 2, color: 'orange' }];
  colors: Array<string> = ['green', 'orange', 'blue', 'red', 'yellow', 'black', 'grey', 'white', 'brown', 'purple'];

  check() {
    console.log('race component view checked');
  }

  changeColor() {
    this.ponies[0].color = this.randomColor();
  }

  randomColor() {
    const index = Math.floor(Math.random() * 10);
    return this.colors[index];
  }

}
