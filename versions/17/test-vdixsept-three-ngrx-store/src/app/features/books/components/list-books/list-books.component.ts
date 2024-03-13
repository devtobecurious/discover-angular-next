import { Component, inject } from '@angular/core';
import { BookStore } from '../../store';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBooksComponent } from '../add-books/add-books.component';
import { UpdateBooksComponent } from '../update-books/update-books.component';
import { Book } from '../../models';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [AddBooksComponent, UpdateBooksComponent],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
  store = inject(BookStore);
  editingBook: Book | undefined;

  editOne(book: Book): void {
    this.editingBook = book;
  }

  cancelEdition(): void {
    this.editingBook = undefined;
  }
}
