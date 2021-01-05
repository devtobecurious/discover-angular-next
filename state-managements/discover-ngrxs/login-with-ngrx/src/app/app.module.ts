import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthenticationModule } from './features/authentications/authentication.module';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers, metaReducers, routerReducerKey } from './core/store/reducers/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks : {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability:true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: routerReducerKey, // property in the state
      routerState: RouterState.Minimal // serialize the minimal value of the router state
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
