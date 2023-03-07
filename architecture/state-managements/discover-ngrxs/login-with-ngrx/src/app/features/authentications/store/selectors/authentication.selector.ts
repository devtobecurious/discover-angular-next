import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ApplicationState } from "src/app/core/store/reducers";
import { AuthenticateState } from "../reducers/authenticate.reducer";

export const selectAuthenticateState = createFeatureSelector<AuthenticateState>('authenticate');

// V1
// export const isLoggedIn = createSelector(
//   (state: ApplicationState) => state.authenticate,
//   (authUser) => !! authUser.user
// );

// V2
export const isLoggedIn = createSelector(
  selectAuthenticateState,
  (authUser) => !! authUser.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
