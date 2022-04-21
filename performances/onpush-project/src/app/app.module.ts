import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastermindModule } from './features/mastermind/mastermind.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MastermindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
