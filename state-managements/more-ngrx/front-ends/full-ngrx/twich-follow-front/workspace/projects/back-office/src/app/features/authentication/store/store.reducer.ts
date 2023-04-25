import { createReducer, on } from '@ngrx/store';
import { AuthenticatedUser, AuthenticateStateWithToken } from '../models';
import { isLogginAction, isLogginSuccessAction } from './actions';

export const authenticationFeatureKey = 'authentication';

export interface AuthenticationState {
  user?: AuthenticatedUser
}

export const initialState: AuthenticationState = {
  user: undefined
};

export const authenticationReducer = createReducer(
  initialState,
  on(isLogginSuccessAction, (state, { user }) => ({ ...state, user: { ...user, isLogged: true } }))
);


