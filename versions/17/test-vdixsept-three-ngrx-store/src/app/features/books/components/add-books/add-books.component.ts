import { Component, inject } from '@angular/core';
import { BookStore } from '../../store';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models';
import { ChildSaveOneBooksComponent } from '../child-save-one-books/child-save-one-books.component';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [ChildSaveOneBooksComponent],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  store = inject(BookStore);


  save(item: Book): void {
    this.store.addInmemory(item);
  }
}
