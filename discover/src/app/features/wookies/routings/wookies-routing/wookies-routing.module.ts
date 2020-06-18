import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWookiesComponent } from '../../list-wookies/list-wookies.component';

const routes: Routes = [
  {
    component: ListWookiesComponent, path: 'wookies'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WookiesRoutingModule { }
