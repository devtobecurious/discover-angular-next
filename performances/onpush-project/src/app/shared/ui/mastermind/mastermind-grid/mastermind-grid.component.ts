import { Component, Input, OnInit } from '@angular/core';
import { Tile, TileCell } from '../models';

@Component({
  selector: 'app-mastermind-grid',
  templateUrl: './mastermind-grid.component.html',
  styleUrls: ['./mastermind-grid.component.css']
})
export class MastermindGridComponent implements OnInit {
  @Input() tiles: Tile[] = [];
  cells: TileCell[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cells = this.tiles.map(tile => {
      const cell = { ... tile, css: '' };

      cell.css = 'tile';
      if (tile.isRevealed) {
        cell.css += ' flipped';
      }

      console.info(cell);

      return cell;
    });
  }

  logView() {
    console.info('view');
  }

  clickTile() {
    console.info('click tile');
  }
}
