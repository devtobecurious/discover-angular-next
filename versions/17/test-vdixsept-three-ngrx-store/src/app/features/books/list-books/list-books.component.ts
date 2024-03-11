import { Component, inject } from '@angular/core';
import { BookStore } from '../store';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBooksComponent } from '../add-books/add-books.component';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [AddBooksComponent],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
  store = inject(BookStore);
}
