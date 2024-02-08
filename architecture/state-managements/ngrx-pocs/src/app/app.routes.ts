import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'games',
  loadChildren: () => import('../app/features/games/games.routes').then(item => item.routes)
}];
