import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, TileCell } from '../models';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CellComponent implements OnInit {
  @Input() item !: TileCell;

  constructor() { }

  ngOnInit(): void {
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
