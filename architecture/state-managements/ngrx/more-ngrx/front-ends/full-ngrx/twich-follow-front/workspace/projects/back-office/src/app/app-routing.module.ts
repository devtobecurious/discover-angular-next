import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './features/authentication/guards/is-authenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  {
    path: '',
    canActivate: [IsAuthenticatedGuard],
    children: [
      { path: 'games', loadChildren: () => import('./features/twitch-games/twitch-games.module').then(m => m.TwitchGamesModule) },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
