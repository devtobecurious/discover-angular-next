import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, Tile, TileCell } from '../models';

@Component({
  selector: 'app-mastermind-grid',
  templateUrl: './mastermind-grid.component.html',
  styleUrls: ['./mastermind-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MastermindGridComponent implements OnInit {
  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });

//    this.cdRef.detectChanges();
  };
  cells: TileCell[] = [];

 // constructor(private readonly cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
   // this.cdRef.detach();
  }

  logView() {
    console.info('view');
  }


  trackByFn(index: number, item: TileCell) {
    return item.id;
  }


}
