import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScanComponent } from './scan/scan.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanComponent,
    CombineLatestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ForkJoinComponent,
    ShareReplayComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
