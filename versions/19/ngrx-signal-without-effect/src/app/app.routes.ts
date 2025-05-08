import { Routes } from '@angular/router';
import { EditOne } from './features/movies/components/edit-one/edit-one';

export const routes: Routes = [{
  path: 'movie/:id/:categoryId',
  component: EditOne
}];
