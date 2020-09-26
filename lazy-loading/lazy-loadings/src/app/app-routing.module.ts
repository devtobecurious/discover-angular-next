import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: 'wookies',
    loadChildren: () =>  import('./business/wookies/wookies.module').then(item => item.WookiesModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
