import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';

import { StarWarsPlayerModule } from 'star-wars-player';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule,
    StarWarsPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
