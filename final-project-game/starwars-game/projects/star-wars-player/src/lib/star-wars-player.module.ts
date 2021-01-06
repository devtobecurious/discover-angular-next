import { NgModule } from '@angular/core';
import { StarWarsPlayerComponent } from './star-wars-player.component';
import { MovePlayerDirective } from './directives/move-player.directive';



@NgModule({
  declarations: [StarWarsPlayerComponent, MovePlayerDirective],
  imports: [
  ],
  exports: [StarWarsPlayerComponent, MovePlayerDirective]
})
export class StarWarsPlayerModule { }
