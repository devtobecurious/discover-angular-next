import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WookieResolver } from './resolvers/wookie.resolver';
import { WookieEditComponent } from './wookie-edit/wookie-edit.component';
import { WookieListComponent } from './wookie-list/wookie-list.component';

const routes: Routes = [
  {
    path: '',
    component: WookieListComponent,
    resolve: {
      wookies: WookieResolver
    }
  },
  {
    path: 'edit/:id',
    component: WookieEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WookieRoutingModule { }
