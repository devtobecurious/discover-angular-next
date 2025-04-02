import { Routes } from '@angular/router';
import { ListVideoGames } from './features/video-games/components/list-video-games/list-video-games';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'video-games',
    component: ListVideoGames
  }
];
