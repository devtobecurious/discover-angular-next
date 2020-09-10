import { RouterModule } from '@angular/router';
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
import { QueryComponent } from './animations/complexs/query/query.component';
import { MenuComponent } from './routes-with-animations/menu/menu.component';
import { FirstComponent } from './routes-with-animations/first/first.component';
import { SecondComponent } from './routes-with-animations/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    WildcardComponent,
    ThreeStatesWildcardComponent,
    LeaveEnterComponent,
    VoidComponent,
    WithCallbackComponent,
    KeyframesComponent,
    QueryComponent,
    MenuComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'component1', component: FirstComponent, data: { animation: 'Component1' } },
      { path: 'component2', component: SecondComponent, data: { animation: 'Component2' } }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
