import { Routes } from '@angular/router';
import { authenticationRoutes } from './features/authentication/authentication.routes';
import { HomePageComponent } from './pages/home/home.page';

export const routes: Routes = [
  {
    path: 'authenticate',
    children: authenticationRoutes,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
];
