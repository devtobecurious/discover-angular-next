import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/the-game/src/app/store/reducers";
import { EnemyState } from "../reducers/enemy.reducer";

export const selectEnemies = createFeatureSelector<ApplicationState, EnemyState>('Enemy');

export const selectAllEnemies = createSelector(
  selectEnemies,
  (state: EnemyState) => {

    return state?.items;
  }
);
