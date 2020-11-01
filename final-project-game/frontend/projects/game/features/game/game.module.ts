import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { DisplayCharacterGameModule } from 'display-character-game';



@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    DisplayCharacterGameModule
  ],
  exports: [
    DisplayComponent
  ]
})
export class GameModule { }
