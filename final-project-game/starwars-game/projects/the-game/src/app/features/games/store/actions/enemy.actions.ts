import { createAction, props } from "@ngrx/store";
import { Enemy } from "projects/the-game/src/app/core/models/enemy";

export enum ActionsType {
  loadEnemies = '[ GAME - Init ] Load all enemies',
  loadEnemiesSuccess = '[ GAME - Init] Load all enemies Is Success',
};

export const loadEnemies = createAction(ActionsType.loadEnemies);
export const loadEnemiesSuccess = createAction(ActionsType.loadEnemiesSuccess, props<{enemies: Enemy[]}>());
