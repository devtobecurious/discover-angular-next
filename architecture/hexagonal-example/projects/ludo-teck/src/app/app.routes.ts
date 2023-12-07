import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'books',
  loadChildren: () => import('books').then(item => item.bookRoutes)
}];
