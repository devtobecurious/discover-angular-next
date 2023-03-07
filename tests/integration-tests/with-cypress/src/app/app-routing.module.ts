import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WookiesListComponent } from './wookies-list/wookies-list.component';

const routes: Routes = [
  {
    path: 'wookies',
    component: WookiesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
