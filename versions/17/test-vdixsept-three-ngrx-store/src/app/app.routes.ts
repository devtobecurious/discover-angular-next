import { Routes } from '@angular/router';
import { ListBooksComponent } from './features/books/list-books/list-books.component';

export const routes: Routes = [
  {
    path: 'books',
    component: ListBooksComponent
  }
];
