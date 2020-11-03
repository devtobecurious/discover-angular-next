import { NgModule } from '@angular/core';
import { DisplayCharacterGameComponent } from './display-character-game.component';
import { DroideComponent } from './core/models/droide/droide.component';



@NgModule({
  declarations: [
    DisplayCharacterGameComponent,
    DroideComponent
  ],
  imports: [
  ],
  exports: [
    DisplayCharacterGameComponent
  ]
})
export class DisplayCharacterGameModule { }
