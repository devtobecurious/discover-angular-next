import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './animations/first-component/first-component.component';
import { WildcardComponent } from './animations/transition-trigger/wildcard/wildcard.component';
import { ThreeStatesWildcardComponent } from './animations/transition-trigger/three-states-wildcard/three-states-wildcard.component';
import { LeaveEnterComponent } from './animations/transition-trigger/leave-enter/leave-enter.component';
import { VoidComponent } from './animations/transition-trigger/void/void.component';
import { WithCallbackComponent } from './animations/with-callback/with-callback.component';
import { KeyframesComponent } from './animations/keyframes/keyframes.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    WildcardComponent,
    ThreeStatesWildcardComponent,
    LeaveEnterComponent,
    VoidComponent,
    WithCallbackComponent,
    KeyframesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
