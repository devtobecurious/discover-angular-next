import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// On filtre le bon state
const getCurrentState = (state: ApplicationState) => state.games;

// On prépare nos selectors
export const getAllGamesSelector = createSelector(getCurrentState, state => state.items);
export const getOnlyOneGameSelector = createSelector(getAllGamesSelector, items => items.length == 1);
