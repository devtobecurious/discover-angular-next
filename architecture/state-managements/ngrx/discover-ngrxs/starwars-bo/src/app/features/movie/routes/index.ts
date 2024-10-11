import { Routes } from "@angular/router";
import { PageListMovieComponent } from "../page-list-movie/page-list-movie.component";

export const movieRoutes: Routes = [
  {
    path: 'list',
    component: PageListMovieComponent
  }
];
