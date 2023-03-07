import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatTimesDirective } from './repeat-times.directive';
import { UsingDirectiveRepeatingTimesComponent } from './using-directive-repeating-times/using-directive-repeating-times.component';
import { DelayCardDirective } from './delay-card.directive';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    RepeatTimesDirective,
    UsingDirectiveRepeatingTimesComponent,
    DelayCardDirective,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
