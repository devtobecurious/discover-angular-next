import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./features/people/people.routes').then(i => i.peopleRoutes)
  }
];
