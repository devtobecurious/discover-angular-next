import { Action, createAction } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Reset = '[Counter] Reset',
}

export const increment = createAction(CounterActionTypes.Increment);
export const decrement = createAction(CounterActionTypes.Decrement);
export const reset = createAction(CounterActionTypes.Reset);

