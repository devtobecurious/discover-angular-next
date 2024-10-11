import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authenticationFeatureKey, AuthenticationState } from "../store.reducer";

export const selectAuthUserSelector = createFeatureSelector<AuthenticationState>(authenticationFeatureKey);
export const selectUserIsLogged = createSelector(selectAuthUserSelector, (state: AuthenticationState) => state.user?.isLogged);
export const selectUserAuthWithFailure = createSelector(selectAuthUserSelector, (state: AuthenticationState) => state.error);
