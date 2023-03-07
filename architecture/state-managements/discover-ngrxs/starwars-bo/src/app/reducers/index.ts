import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export interface ApplicationState {

}

export const reducers: ActionReducerMap<ApplicationState> = {

};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
