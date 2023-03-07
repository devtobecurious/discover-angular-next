import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from '../reducers/counter.reducer';

export interface State {
  [fromCounter.counterKey]: fromCounter.State
}

export const reducers: ActionReducerMap<State> = {
  [fromCounter.counterKey]: fromCounter.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
