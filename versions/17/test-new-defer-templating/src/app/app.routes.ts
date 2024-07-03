import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'child',
  loadChildren: () => import('./child-by-route-one/childs.routes').then(item => item.childRoutes)
}];
