import { Routes } from "@angular/router";
import { ListFilmsComponent } from "./components/list-films/list-films.component";

export const filmsRoutes: Routes = [
  {
    path: '',
    component: ListFilmsComponent
  }
]
