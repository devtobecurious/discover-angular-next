import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Planet } from '../models';
import { createFeature, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { loadPlanetsInMemory } from './actions';

const planetAdapter = createEntityAdapter<Planet>();
const initialState: EntityState<Planet> = planetAdapter.getInitialState();

const inReducer = createReducer(initialState,
  on(loadPlanetsInMemory, (state, { planets }) => planetAdapter.setAll(planets, state))
);

export const planetFeature = createFeature({
  name: 'planets',
  reducer: inReducer
});


export const {
  name,
  reducer,
  selectEntities,
  selectPlanetsState
} = planetFeature;

export const {
  selectAll
} = planetAdapter.getSelectors(selectPlanetsState);


