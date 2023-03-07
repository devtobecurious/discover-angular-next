import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticateGuard } from 'src/app/shared/guards/authenticate.guard';
import { AuthenticateService } from 'src/app/shared/services/authenticates/authenticate.service';
import { LoginService } from 'src/app/shared/services/authenticates/login.service';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthenticateEffect } from './store/effects/authenticate.effect';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    //StoreModule.forFeature(fromAuthenticate.authenticateFeatureKey, fromAuthenticate.reducer), // no need because we add the storemodule in the AppModule
    EffectsModule.forFeature([AuthenticateEffect])
  ],
  exports: [LoginComponent]
})
export class AuthenticationModule {
  static forRoot(): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [
        LoginService, AuthenticateService, AuthenticateGuard
      ]
    }
  }
}
