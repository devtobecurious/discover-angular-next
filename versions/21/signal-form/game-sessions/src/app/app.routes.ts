import { Routes } from '@angular/router';
import { gamesSessionsRoutes } from './features/games-sessions/game-sessions.routes';
import { accountRoutes } from './features/account/account.routes';
import { CreateAccountComponent } from './features/account/components/create-account/create-account';

export const routes: Routes = [
  {
    path: 'sessions',
    children: gamesSessionsRoutes
  },
  {
    path: 'account',
    children: accountRoutes
  }
];
