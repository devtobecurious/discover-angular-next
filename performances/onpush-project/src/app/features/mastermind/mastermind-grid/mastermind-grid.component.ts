import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { changeStateCell, Tile, TileCell } from '../models';

@Component({
  selector: 'app-mastermind-grid',
  templateUrl: './mastermind-grid.component.html',
  styleUrls: ['./mastermind-grid.component.css']
})
export class MastermindGridComponent implements OnInit {
  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  };
  cells: TileCell[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  logView() {
    console.info('view');
  }

  clickTile(item: TileCell, cell: HTMLDivElement) {
    changeStateCell(item, ! item.isRevealed, true);
    this.appearValueOnCell(item, cell);
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

  private appearValueOnCell(cell: TileCell, div: HTMLDivElement) {
    div.innerText = '';

    if (cell.isRevealed) {
      div.innerText = cell.value.toString();
    }
  }
}
