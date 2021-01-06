import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsPlayerModule } from 'star-wars-player';
import { GameComponent } from './game/game.component';
import { GameRoutingModule } from './game-routing.module';


@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    StarWarsPlayerModule
  ]
})
export class GameModule { }
