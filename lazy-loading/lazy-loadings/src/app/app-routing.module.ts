import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { PreLoaderStrategy } from './shared/loaders/pre-loader-strategy';

const routes: Routes = [
  {
    path: 'wookies',
    loadChildren: () =>  import('./business/wookies/wookies.module').then(item => item.WookiesModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreLoaderStrategy })],
  providers: [
    PreLoaderStrategy
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
