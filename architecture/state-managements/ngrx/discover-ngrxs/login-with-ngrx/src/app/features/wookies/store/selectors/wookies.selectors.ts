import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WookiesState } from "../reducers/wookie.reducer";
import * as fromReducer from '../reducers/wookie.reducer';

export const selectWookiesState = createFeatureSelector<WookiesState>('wookies');

export const selectAllWookies = createSelector(
  selectWookiesState,
  fromReducer.selectAll
);

export const selectAllBigWookies = createSelector(
  selectAllWookies,
  wookies => wookies.filter(item => item.size > 250)
);

export const areLoaded = createSelector(
  selectWookiesState,
  wookies => wookies.allLoaded
);
