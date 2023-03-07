import { createReducer, on } from '@ngrx/store';
import { AuthenticationActions } from 'src/app/features/authentications/store/actions/actions-types';
import { AuthenticateGuard } from 'src/app/shared/guards/authenticate.guard';
import { AuthenticateUser } from '../../../../core/models/authenticate-user';

export const authenticateFeatureKey = 'authenticate';

export interface AuthenticateState {
  user: AuthenticateUser
}

export const initialState: AuthenticateState = {
  user: undefined
}

export const reducer = createReducer<AuthenticateState>(
  initialState,
  on(AuthenticationActions.login, (state, action) => ({ user: action.user })),
  on(AuthenticationActions.logout, (state, action) => ({ user: undefined})),
);

