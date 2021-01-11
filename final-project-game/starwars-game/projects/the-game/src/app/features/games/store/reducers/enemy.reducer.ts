import { createReducer, on } from "@ngrx/store";
import { Enemy } from "projects/the-game/src/app/core/models/enemy";
import * as fromActions from '../actions/enemy.actions';

export const accessKey = 'Enemy';

export interface EnemyState {
  items: Enemy[]
}

export const initialState: EnemyState = {
  items: undefined
}

export const reducer = createReducer(
  initialState,
  on(fromActions.loadEnemiesSuccess, (state, action) => {
    return  ({ items: action.enemies });
  })
);
