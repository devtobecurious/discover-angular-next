import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookStore } from '../../services/book.store';
import { AsyncPipe } from '@angular/common';
import { filter, tap } from 'rxjs';
import { AddBookApplication } from '../../services/applications';

@Component({
  selector: 'lib-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  private readonly bookStore = inject(BookStore);
  private readonly bookApplication = inject(AddBookApplication);
  newBooks$ = this.bookStore.asObservable.pipe(tap(item => console.info('item', item)),filter(result => !!result && !!result.item));

  addBookForm = new FormGroup({
    title: new FormControl<string>('', {nonNullable: true})
  });

  save(): void {
    this.bookStore.dispatch(this.addBookForm.value);
  }
}
