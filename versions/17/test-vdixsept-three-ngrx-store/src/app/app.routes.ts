import { Routes } from '@angular/router';
import { ListBooksComponent } from './features/books/components/list-books/list-books.component';

export const routes: Routes = [
  {
    path: 'books',
    component: ListBooksComponent
  }
];
