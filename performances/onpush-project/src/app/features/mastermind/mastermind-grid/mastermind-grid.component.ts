import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { changeStateCell, Tile, TileCell } from '../models';

@Component({
  selector: 'app-mastermind-grid',
  templateUrl: './mastermind-grid.component.html',
  styleUrls: ['./mastermind-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MastermindGridComponent implements OnInit {
  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });

    this.cdRef.detectChanges();
  };
  cells: TileCell[] = [];

  constructor(private readonly cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdRef.detach();
  }

  logView() {
    console.info('view');
  }

  clickTile(item: TileCell, cell: HTMLDivElement) {
    changeStateCell(item, ! item.isRevealed, true);
    this.appearValueOnCell(item, cell);
    this.cdRef.detectChanges();
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
