import { Routes } from '@angular/router';
import { gamesSessionsRoutes } from './features/games-sessions/game-sessions.routes';

export const routes: Routes = [
  {
    path: 'sessions',
    children: gamesSessionsRoutes
  }
];
