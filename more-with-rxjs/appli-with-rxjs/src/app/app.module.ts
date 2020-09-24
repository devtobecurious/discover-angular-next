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
import { ShareReplayComponent } from './shared/components/share-replay/share-replay.component';
import { ShareComponent } from './shared/components/share/share.component';
import { ColdOrHotComponent } from './shared/components/cold-or-hot/cold-or-hot.component';
import { SubjectComponent } from './shared/components/subject/subject.component';

import { MergeMapComponent } from './shared/components/merge-map/merge-map.component';
import { SwitchMapComponent } from './shared/components/switch-map/switch-map.component';
import { ConcatMapComponent } from './shared/components/concat-map/concat-map.component';
import { NeverComponent } from './shared/components/never/never.component';
import { BehaviorSubjectComponent } from './shared/components/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './shared/components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './shared/components/async-subject/async-subject.component';
import { ZipForkForkjoinCombinelatestRaceComponent } from './shared/components/zip-fork-forkjoin-combinelatest-race/zip-fork-forkjoin-combinelatest-race.component';
import { AddComponent } from './features/wookies/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOneWookieComponent,
    UnsubscribeComponent,
    TakeUntilSubjectComponent,
    ColdObservableComponent,
    PublishReplayComponent,
    ShareReplayComponent,
    ShareComponent,
    ColdOrHotComponent,
    SubjectComponent,
    MergeMapComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    NeverComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ZipForkForkjoinCombinelatestRaceComponent,
    ReplaySubjectComponent,
    AddComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
