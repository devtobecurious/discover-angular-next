import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authenticationFeatureKey, authenticationReducer } from './store/store.reducer';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthEffect } from './store/effects';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(authenticationFeatureKey, authenticationReducer),
    EffectsModule.forFeature([AuthEffect]),
    AuthenticationRoutingModule,
    AlertModule.forRoot()
  ]
})
export class AuthenticationModule { }
