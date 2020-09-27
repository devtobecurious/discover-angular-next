import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWookieComponent } from './features/wookies/one-wookie/one-wookie.component';

import localefr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localefr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    OneWookieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
