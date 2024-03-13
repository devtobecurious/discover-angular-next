import { Component, inject } from '@angular/core';
import { BookStore } from '../../store';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  store = inject(BookStore);


  save(): void {
    // this.store.addInmemory(this.bookForm.value as Book);
  }
}
