import { Position } from './models/position';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-display-character-game',
  templateUrl: 'display-character-game.component.html',
  styleUrls: [ 'display-character-game.component.css' ]
})
export class DisplayCharacterGameComponent implements OnInit {
  currentPosition: Position;

  constructor() {
    this.currentPosition = { x: 0, y: 0 };
  }

  ngOnInit(): void {
  }

  get x(): number {
    return this.currentPosition.x;
  }

  @Input()
  set x(value: number) {
    console.log('x', value);
    this.currentPosition.x = value;
  }

  get y(): number {
    return this.currentPosition.y;
  }

  @Input()
  set y(value: number) {
    this.currentPosition.y = value;
  }
}
