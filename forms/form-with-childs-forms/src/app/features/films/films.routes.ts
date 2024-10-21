import { Routes } from "@angular/router";
import { AddFilmComponent } from "./components/add-film/add-film.component";

export const filmsRoutes: Routes = [
  {
    path: 'add',
    component: AddFilmComponent
  }
]
