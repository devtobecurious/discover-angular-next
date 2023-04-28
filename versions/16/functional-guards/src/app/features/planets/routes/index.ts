import { Routes } from "@angular/router";
import { ListPlanetsComponent } from "../list-planets/list-planets.component";
import { isNotOnEditGuard } from "./guards";

export const planetsRoutes: Routes = [
  {
    path: '',
    component: ListPlanetsComponent,
    canDeactivate: [isNotOnEditGuard]
  }
];
