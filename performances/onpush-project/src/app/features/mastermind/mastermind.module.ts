import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastermindGridComponent } from './mastermind-grid/mastermind-grid.component';
import { CellComponent } from './cell/cell.component';



@NgModule({
  declarations: [
    MastermindGridComponent,
    CellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MastermindGridComponent
  ]
})
export class MastermindModule { }
