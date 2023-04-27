import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildWithTitleComponent } from './child-with-title/child-with-title.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChildWithTitleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
