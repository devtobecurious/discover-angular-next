import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WookiesState } from "../reducers/wookie.reducer";
import * as fromReducer from '../reducers/wookie.reducer';

export const selectCoursesState = createFeatureSelector<WookiesState>('wookies');

export const selectAllWookies = createSelector(
  selectCoursesState,
  fromReducer.selectAll
);

export const selectAllBigWookies = createSelector(
  selectAllWookies,
  wookies => wookies.filter(item => item.size > 250)
)
