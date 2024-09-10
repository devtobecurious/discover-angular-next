import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./test-second/test-second.component').then(item => item.TestSecondComponent)
  }
];
