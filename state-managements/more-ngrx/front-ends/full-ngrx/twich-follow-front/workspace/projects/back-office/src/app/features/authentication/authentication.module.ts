import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authenticationFeatureKey, authenticationReducer } from './store/store.reducer';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(authenticationFeatureKey, authenticationReducer),
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
