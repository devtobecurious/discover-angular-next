import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WookieBisResolver } from './resolvers/wookie-bis.resolver';
import { WookieResolver } from './resolvers/wookie.resolver';
import { WookieEditComponent } from './wookie-edit/wookie-edit.component';
import { WookieListComponent } from './wookie-list/wookie-list.component';
import { WookieComponent } from './wookie/wookie.component';

const routes: Routes = [
  {
    path: 'wookies',
    component: WookieListComponent,
    resolve: {
      wookies: WookieResolver
    }
  },
  {
    path: '',
    component: HomeComponent,
    resolve: {
      wookies: WookieBisResolver
    }
  },
  {
    path: 'edit/:id',
    component: WookieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WookieRoutingModule { }
