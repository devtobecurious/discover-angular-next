import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../store/actions/counter.actions";

export const counterKey = 'counter';

export interface State {
  value: number;
}

export const initialState: State = {
  value: 0
};

export const reducer = createReducer(
  initialState,
  on(increment, state => ({ value: state.value + 1 })),
  on(decrement, state => ({ value: state.value - 1 })),
  on(reset, state => ({ value: 0 })),
);
