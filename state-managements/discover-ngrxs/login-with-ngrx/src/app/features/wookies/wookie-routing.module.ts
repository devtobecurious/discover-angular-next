import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WookieListComponent } from './wookie-list/wookie-list.component';

const routes: Routes = [
  {
    path: '',
    component: WookieListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WookieRoutingModule { }
