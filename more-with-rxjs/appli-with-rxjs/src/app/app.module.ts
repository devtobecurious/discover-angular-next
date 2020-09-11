import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayOneWookieComponent } from './shared/components/display-one-wookie/display-one-wookie.component';
import { UnsubscribeComponent } from './shared/components/unsubscribe/unsubscribe.component';
import { TakeUntilSubjectComponent } from './shared/components/take-until-subject/take-until-subject.component';
import { ColdObservableComponent } from './shared/components/cold-observable/cold-observable.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PublishReplayComponent } from './shared/components/publish-replay/publish-replay.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOneWookieComponent,
    UnsubscribeComponent,
    TakeUntilSubjectComponent,
    ColdObservableComponent,
    PublishReplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
