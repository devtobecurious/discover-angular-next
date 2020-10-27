import { MyLibModule, MyLibService } from 'my-lib';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule
  ],
  providers: [
    MyLibService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
