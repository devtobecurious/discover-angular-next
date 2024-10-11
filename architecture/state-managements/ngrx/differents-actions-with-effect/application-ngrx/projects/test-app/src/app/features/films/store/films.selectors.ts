import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

export const selectAllFilms = createSelector((app: ApplicationState) => app.films,
                                            state => state.items)
