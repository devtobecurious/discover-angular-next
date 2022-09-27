import { UnOutsideComponent } from './components/un-outside/un.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnComponent } from './components/un/un.component';
import { DeuxComponent } from './components/deux/deux.component';
import { TroisComponent } from './components/trois/trois.component';

@NgModule({
  declarations: [
    AppComponent,
    UnComponent,
    UnOutsideComponent,
    DeuxComponent,
    TroisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
