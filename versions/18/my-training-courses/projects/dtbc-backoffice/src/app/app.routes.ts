import { Routes } from '@angular/router';
import { authenticationRoutes } from './features/authentication/authentication.routes';

export const routes: Routes = [{
  path: 'authenticate',
  children: authenticationRoutes
}];
