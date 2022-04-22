import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { PonyComponent } from './pony/pony.component';
import { RaceComponent } from './race/race.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    PonyComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
