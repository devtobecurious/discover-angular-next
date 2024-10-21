import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('../app/features/films/films.routes').then(item => item.filmsRoutes)
  }
];
