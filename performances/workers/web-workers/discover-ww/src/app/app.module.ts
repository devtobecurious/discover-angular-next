import { FormsModule } from '@angular/forms';
import { UserComponent } from './features/user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
