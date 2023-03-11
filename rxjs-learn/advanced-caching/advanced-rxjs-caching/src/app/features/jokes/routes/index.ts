import { Routes } from "@angular/router";
import { ListJokesComponent } from "../list-jokes/list-jokes.component";

export const jokeRoutes: Routes = [
  {
    path: ':category',
    component: ListJokesComponent
  }
]
