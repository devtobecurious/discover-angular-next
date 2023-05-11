import { createAction, props } from "@ngrx/store";
import { Planet, Planets } from "../../models";

export const loadPlanetsInMemory = createAction('[UI - Planets] Load planets in memory', props<{ planets: Planets }>());
