import { createReducer, on } from '@ngrx/store';
import { AuthenticateStateWithToken } from '../models';

export const authenticationFeatureKey = 'authentication';

export interface AuthenticationState {
  user?: AuthenticateStateWithToken
}

export const initialState: AuthenticationState = {
  user: undefined
};

export const authenticationReducer = createReducer(
  initialState,
);


