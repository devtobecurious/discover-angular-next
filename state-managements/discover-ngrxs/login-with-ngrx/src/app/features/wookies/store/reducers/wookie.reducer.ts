import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Wookie } from "src/app/core/models/wookie";
import { WookiesActions } from '../actions/actions-types';

export const wookieFeatureKey = 'wookies';

// V1: First good idea, but because we just need to check the identity, not need to get all the wooky instances
// export interface WookiesState {
//   wookies: Wookie[];
// }

// V2: most power full, but long, because we have to define it for each model ...
// export interface WookiesState {
//   entities: { [key: number]: Wookie },
//   ids: number[]
// }

export interface WookiesState extends EntityState<Wookie> {
}

export const adapter = createEntityAdapter<Wookie>();
export const { selectAll } = adapter.getSelectors();
export const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(WookiesActions.wookiesLoaded, (state, action) => adapter.setAll(action.wookies, state))
);
