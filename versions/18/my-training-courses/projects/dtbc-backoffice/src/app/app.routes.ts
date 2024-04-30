import { Routes } from '@angular/router';
import { authenticationRoutes } from './features/authentication/authentication.routes';
import { HomePageComponent } from './pages/home/home.page';
import { userIsAuthenticatedGuard } from './features/authentication/guards/authenticate.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'authenticate',
    children: authenticationRoutes,
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [userIsAuthenticatedGuard],
  },
  {
    path: '**',
    redirectTo: 'authenticate/login',
    pathMatch: 'full',
  },
];
