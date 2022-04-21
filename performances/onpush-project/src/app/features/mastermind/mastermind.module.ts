import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastermindGridComponent } from './mastermind-grid/mastermind-grid.component';



@NgModule({
  declarations: [
    MastermindGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MastermindGridComponent
  ]
})
export class MastermindModule { }
