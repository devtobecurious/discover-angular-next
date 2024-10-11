import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { filmsReducer, FilmsState } from '../features/films/store';

export interface ApplicationState {
  films: FilmsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  films: filmsReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
