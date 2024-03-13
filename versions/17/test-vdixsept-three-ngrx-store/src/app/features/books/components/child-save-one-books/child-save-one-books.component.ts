import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models';

@Component({
  selector: 'app-child-save-one-books',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child-save-one-books.component.html',
  styleUrl: './child-save-one-books.component.css'
})
export class ChildSaveOneBooksComponent {
  requestToSave = output<Book>();

  bookForm = inject(FormBuilder).group({
    title: ['', Validators.required ],
    description: ['', Validators.required ]
  });

  save(): void {
    this.requestToSave.emit(this.bookForm.value as Book);
  }
}
