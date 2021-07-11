import { LoginComponent } from './../../../../../state-managements/discover-ngrxs/login-with-ngrx/src/app/features/authentications/login/login.component';
import { HomeComponent } from './../../../../../state-managements/discover-ngrxs/login-with-ngrx/src/app/features/wookies/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
