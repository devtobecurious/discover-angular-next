import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"
import { forkJoin, map } from "rxjs";
import { ApiPeopleResult, ApiPlanetResult } from "../models";

export const getPeople = () => {
  return inject(HttpClient).get<ApiPeopleResult>('https://swapi.dev/api/people');
}

export const getPlanets = () => {
  return inject(HttpClient).get<ApiPlanetResult>('https://swapi.dev/api/planets');
}

export const getPeopleAndPlanets = () => {
  return forkJoin([getPeople(), getPlanets()]).pipe(
    map(([people, planets]) => ({ people, planets }))
  )
};
