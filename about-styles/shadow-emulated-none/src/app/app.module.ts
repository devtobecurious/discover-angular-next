import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoneStyleComponent } from './none-style/none-style.component';
import { VirtualStyleComponent } from './virtual-style/virtual-style.component';
import { ShadowdomStyleComponent } from './shadowdom-style/shadowdom-style.component';

@NgModule({
  declarations: [
    AppComponent,
    NoneStyleComponent,
    VirtualStyleComponent,
    ShadowdomStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
