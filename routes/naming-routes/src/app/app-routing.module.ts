import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WookiesSidebarComponent } from './wookies-sidebar/wookies-sidebar.component';
import { WookiesComponent } from './wookies/wookies.component';

const routes: Routes = [
  {
    path: 'wookies',
    component: WookiesComponent
  },
  {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar'
  },
  {
    path: 'child-wookies',
    component: WookiesSidebarComponent,
    outlet: 'sidebar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
