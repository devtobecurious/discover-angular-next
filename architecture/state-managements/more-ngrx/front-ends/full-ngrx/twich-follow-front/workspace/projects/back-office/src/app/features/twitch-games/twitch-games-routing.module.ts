import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitchGameMainPageComponent } from './pages/twitch-game-main-page/twitch-game-main-page.component';
import { ListTwitchGamesComponent } from './list-twitch-games/list-twitch-games.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TwitchGameMainPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitchGamesRoutingModule { }
