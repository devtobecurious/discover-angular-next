import { Component, inject } from '@angular/core';
import { BookStore } from '../store';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../models';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  store = inject(BookStore);
  bookForm = inject(FormBuilder).group({
    title: ['', Validators.required ],
    description: ['', Validators.required ]
  });

  save(): void {
    this.store.addInmemory(this.bookForm.value as Book);
  }
}
