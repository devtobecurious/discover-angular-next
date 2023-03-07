import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLibSpecialDevtobecuriousModule } from 'my-lib-special-devtobecurious';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibSpecialDevtobecuriousModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
