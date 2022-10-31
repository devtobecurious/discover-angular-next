import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './features/global/home/home.component';
import { AdminManagerComponent } from './features/manager/admin-manager/admin-manager.component';
import { CustomPreloadingStrategy } from './shared/tools/routing';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadComponent: () => import('../app/features/manager/admin-manager/admin-manager.component').then(item => item.AdminManagerComponent),
    data:  {preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
