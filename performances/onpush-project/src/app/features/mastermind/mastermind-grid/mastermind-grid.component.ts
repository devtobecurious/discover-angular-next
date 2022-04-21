import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { changeStateCell, Tile, TileCell } from '../models';

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
    console.info(this.tiles);
    this.cells = this.tiles.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  }

  logView() {
    console.info('view');
  }

  clickTile(item: TileCell, cell: HTMLDivElement) {
    changeStateCell(item, ! item.isRevealed, true);
    this.appearValueOnCell(item, cell);
  }

  private appearValueOnCell(cell: TileCell, div: HTMLDivElement) {
    div.innerText = '';

    if (cell.isRevealed) {
      div.innerText = cell.value.toString();
    }
  }
}
