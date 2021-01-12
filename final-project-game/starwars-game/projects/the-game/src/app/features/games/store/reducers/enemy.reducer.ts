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

function moveEnemies(state: EnemyState): EnemyState {
  return {
    items: state.items.map(item => moveEnemy(item))
  }
}

function moveEnemy(enemy: Enemy): Enemy {
  return createEnemy(enemy, enemy.location.x - (Math.random() * 5), 500);
}

function createEnemy(enemy: Enemy, x: number, y: number): Enemy {
  return {
    name: enemy.name,
    type: enemy.type,
    location: {
      x: x,
      y: y
    }
  }
}

function displayEnemies(state: EnemyState): EnemyState {
  return {
    items: state.items.map(item => createEnemy(item, 500 + (Math.random() * 100), 500))
  }
}



export const reducer = createReducer(
  initialState,
  on(fromActions.loadEnemiesSuccess, (state, action) => {
    return displayEnemies({ items: action.enemies });
  }),
  on(fromActions.moveEnemies, (state) => {
    return moveEnemies(state);
  })
);
