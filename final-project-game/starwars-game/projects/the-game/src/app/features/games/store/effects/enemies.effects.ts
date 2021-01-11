import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import * as fromEnemiesActions from '../actions/enemy.actions';
import { concatMap, map } from 'rxjs/operators';
import { EnemyService } from "projects/the-game/src/app/shared/services/enemies/enemy.service";
import { Enemy } from '../../../../core/models/enemy';

@Injectable()
export class EnemiesEffect {
  constructor(private actions: Actions, private enemyService: EnemyService) {}

  loadEnemies = createEffect( () => this.actions.pipe(
    ofType(fromEnemiesActions.loadEnemies),
    concatMap(item => this.enemyService.loadAll()),
    map((enemies: Enemy[]) => {
      return fromEnemiesActions.loadEnemiesSuccess({ enemies });
     } )
  ));
}
