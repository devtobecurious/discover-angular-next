import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistingGameComponent } from './features/games/existing-game/existing-game.component';
import { NewGameComponent } from './features/games/new-game/new-game.component';
import { HomeComponent } from './features/general/home/home.component';
import { getDefaultGameConfig } from './shared/data/config-game';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new',
    component: NewGameComponent,
    data: getDefaultGameConfig()
  },
  {
    path: 'reload',
    component: ExistingGameComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
