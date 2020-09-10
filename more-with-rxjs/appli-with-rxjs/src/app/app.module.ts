import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayOneWookieComponent } from './shared/components/display-one-wookie/display-one-wookie.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOneWookieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
