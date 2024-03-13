import { Component, inject, input, output } from '@angular/core';
import { BookStore } from '../../store';
import { Book } from '../../models';
import { ChildSaveOneBooksComponent } from '../child-save-one-books/child-save-one-books.component';

@Component({
  selector: 'app-update-books',
  standalone: true,
  imports: [ChildSaveOneBooksComponent],
  templateUrl: './update-books.component.html',
  styleUrl: './update-books.component.css'
})
export class UpdateBooksComponent {
  store = inject(BookStore);
  book = input.required<Book>();
  cancelEdit = output();

  save(item: Book): void {
    this.store.updateOneInMemory(item);
  }

  clickToCancel(): void {
    this.cancelEdit.emit();
  }
}
