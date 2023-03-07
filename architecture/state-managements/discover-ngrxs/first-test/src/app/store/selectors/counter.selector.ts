import { createSelector } from '@ngrx/store';
import * as store from '../../reducers/index';
import * as counter from '../../reducers/counter.reducer';

export const selectValue = (state: store.State) => state.counter;

export const counterSelector = createSelector(selectValue, (state: counter.State) => state.value);
