import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as enemyStore from '../../features/games/store/reducers/enemy.reducer';


export interface ApplicationState {
  [enemyStore.accessKey]: enemyStore.EnemyState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  [enemyStore.accessKey]: enemyStore.reducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
