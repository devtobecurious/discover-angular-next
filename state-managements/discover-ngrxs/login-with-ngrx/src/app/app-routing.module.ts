import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateGuard } from './shared/guards/authenticate.guard';

const routes: Routes = [
  {
    path: 'wookies',
    loadChildren: () => import('./features/wookies/wookie.module').then(m => m.WookieModule),
    canActivate: [AuthenticateGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'wookies'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
