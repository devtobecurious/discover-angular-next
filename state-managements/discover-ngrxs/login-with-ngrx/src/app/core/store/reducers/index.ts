import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import * as fromAuthenticate from '../../../features/authentications/store/reducers/authenticate.reducer';

export interface ApplicationState {
  [fromAuthenticate.authenticateFeatureKey]: fromAuthenticate.AuthenticateState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  [fromAuthenticate.authenticateFeatureKey]: fromAuthenticate.reducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];


// function authReducer(state, action): State {
//   // new version of the state to be created
// }

// reducer comes from reduce
// const wookies: { surname: string}[] = [];
// wookies.reduce()
