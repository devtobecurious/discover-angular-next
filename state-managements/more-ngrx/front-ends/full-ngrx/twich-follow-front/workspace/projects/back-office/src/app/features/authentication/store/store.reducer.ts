import { createReducer, on } from '@ngrx/store';
import { AuthenticatedUser, AuthenticateStateWithToken } from '../models';

export const authenticationFeatureKey = 'authentication';

export interface AuthenticationState {
  user?: AuthenticatedUser
}

export const initialState: AuthenticationState = {
  user: undefined
};

export const authenticationReducer = createReducer(
  initialState,
);


