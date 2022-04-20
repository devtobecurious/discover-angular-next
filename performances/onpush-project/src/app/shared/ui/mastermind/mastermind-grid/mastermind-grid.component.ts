import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../models';

@Component({
  selector: 'app-mastermind-grid',
  templateUrl: './mastermind-grid.component.html',
  styleUrls: ['./mastermind-grid.component.css']
})
export class MastermindGridComponent implements OnInit {
  @Input() tiles: Tile[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  logView() {
    console.info('view');
  }

  clickTile() {
    console.info('click tile');
  }
}
