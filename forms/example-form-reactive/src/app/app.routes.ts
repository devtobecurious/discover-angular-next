import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'collecte',
    loadChildren: () => import('../app/features/game-in/routes').then(item => item.collectesRoutes)
  }
];
