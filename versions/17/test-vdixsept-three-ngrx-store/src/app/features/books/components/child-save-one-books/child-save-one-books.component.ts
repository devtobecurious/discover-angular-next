import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-save-one-books',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child-save-one-books.component.html',
  styleUrl: './child-save-one-books.component.css'
})
export class ChildSaveOneBooksComponent {
 // requestToSave = output();

  bookForm = inject(FormBuilder).group({
    title: ['', Validators.required ],
    description: ['', Validators.required ]
  });

  save(): void {

  }
}
