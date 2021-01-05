import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { LoginService } from 'src/app/shared/services/authenticates/login.service';
import * as fromAuthenticate from '../authentications/store/reducers/authenticate.reducer';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    StoreModule.forFeature(fromAuthenticate.authenticateFeatureKey, fromAuthenticate.reducer)
  ],
  exports: [LoginComponent]
})
export class AuthenticationModule {
  static forRoot(): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [LoginService]
    }
  }
}
