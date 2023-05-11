import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Planet, Planets } from '../models';
import { createFeature, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { loadPlanetsInMemory } from './actions';

export interface PlanetState {
  items: Planets;
}

const initialState: PlanetState = {
  items: []
}

const inReducer = createReducer(initialState,
  on(loadPlanetsInMemory, (state, { planets }) => ({ ...state, items: planets }))
);

export const planetFeature = createFeature({
  name: 'planets',
  reducer: inReducer
});


export const {
  name,
  reducer,
  selectPlanetsState
} = planetFeature;

export const selectAllPlanetsFeature = createFeatureSelector<PlanetState>('planets');
export const selectAllPlanets = createSelector(selectAllPlanetsFeature, (state: PlanetState) => state.items);


