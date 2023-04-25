import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authenticationFeatureKey, authenticationReducer } from './store/store.reducer';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthEffect } from './store/effects';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(authenticationFeatureKey, authenticationReducer),
    EffectsModule.forFeature([AuthEffect]),
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
