import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWookiesComponent } from './list-wookies/list-wookies.component';

const routes: Routes = [
  {
    path: '',
    component: ListWookiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WookiesRoutingModule { }
