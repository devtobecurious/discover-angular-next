import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitchGameMainPageComponent } from './pages/twitch-game-main-page/twitch-game-main-page.component';
import { ListTwitchGamesComponent } from './list-twitch-games/list-twitch-games.component';
import { TwitchGamesRoutingModule } from './twitch-games-routing.module';



@NgModule({
  declarations: [
    TwitchGameMainPageComponent,
    ListTwitchGamesComponent
  ],
  imports: [
    CommonModule,
    TwitchGamesRoutingModule
  ]
})
export class TwitchGamesModule { }
