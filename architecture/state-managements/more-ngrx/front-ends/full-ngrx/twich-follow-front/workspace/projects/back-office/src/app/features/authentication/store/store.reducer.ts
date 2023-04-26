import { isLogginFailureAction } from './actions/index';
import { createReducer, on } from '@ngrx/store';
import { ApiError, AuthenticatedUser, AuthenticateStateWithToken } from '../models';
import { isLogginAction, isLogginSuccessAction } from './actions';

export const authenticationFeatureKey = 'authentication';

export interface AuthenticationState {
  user?: AuthenticatedUser,
  error?: ApiError
}

export const initialState: AuthenticationState = {
  user: undefined
};

export const authenticationReducer = createReducer(
  initialState,
  on(isLogginSuccessAction, (state, { user }) => ({ ...state, user: { ...user, isLogged: true } })),
  on(isLogginFailureAction, (state, { error }) => ({ ...state, user: { username: '', password: '', isLogged: false }, error }))
);


