import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsPlayerModule } from 'star-wars-player';
import { StarWarsEnemyModule } from 'star-wars-enemy';
import { GameComponent } from './game/game.component';
import { GameRoutingModule } from './game-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { EnemiesEffect } from './store/effects/enemies.effects';


@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    StarWarsPlayerModule,
    StarWarsEnemyModule
  ]
})
export class GameModule { }
