import { createReducer, on } from '@ngrx/store';
import { AuthenticatedUser, AuthenticateStateWithToken } from '../models';
import { isLogginAction } from './actions';

export const authenticationFeatureKey = 'authentication';

export interface AuthenticationState {
  user?: AuthenticatedUser
}

export const initialState: AuthenticationState = {
  user: undefined
};

export const authenticationReducer = createReducer(
  initialState,
  on(isLogginAction, (state, { user }) => ({ ...state, user: { ...user, isLogged: true } }))
);


