import { Routes } from "@angular/router";
import { ListPlanetsComponent } from "../list-planets/list-planets.component";
import { provideState } from "@ngrx/store";
import { planetFeature } from "../store";

export const planetsRoutes: Routes = [
  {
    path: '',
    component: ListPlanetsComponent,
    providers: [
      provideState(planetFeature)
    ]
  }
];
