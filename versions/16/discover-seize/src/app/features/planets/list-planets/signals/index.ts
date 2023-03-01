import { InjectionToken, signal } from "@angular/core";
import { ApiPlanetsResult } from "../models";

export function createStore() {
  const store = signal<ApiPlanetsResult>({ results: [] });

  const selectorAll = () => store;

  const loadAll = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    store.set(await response.json());
  }

  return {
    selectorAll,
    loadAll
  };
}

export const PLANETS_STORE = new InjectionToken<ReturnType<typeof createStore>>('Planets store with Signals');

export function provideTodosStore() {
    return { provide: PLANETS_STORE, useFactory: createStore };
}
