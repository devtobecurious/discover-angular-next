import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'planets',
    loadChildren: () => import('../app/features/planets/routes/index').then(m => m.planetsRoutes)
  }
];
