import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddMovieComponent } from './add-movie/add-movie.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddMovieComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
