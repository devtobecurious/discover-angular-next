import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWookiesComponent } from '../../list-wookies/list-wookies.component';
import { OneWookieComponent } from '../../one-wookie/one-wookie.component';

const routes: Routes = [
  {
    component: ListWookiesComponent, path: 'wookies'
  },
  {
    component: OneWookieComponent, path: 'one-wookie/:id'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WookiesRoutingModule { }
