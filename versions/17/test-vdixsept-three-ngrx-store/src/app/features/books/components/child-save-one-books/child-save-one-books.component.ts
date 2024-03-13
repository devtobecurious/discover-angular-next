import { Component, OnChanges, SimpleChanges, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models';

@Component({
  selector: 'app-child-save-one-books',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child-save-one-books.component.html',
  styleUrl: './child-save-one-books.component.css'
})
export class ChildSaveOneBooksComponent implements OnChanges {
  requestToSave = output<Book>();
  book = input<Book>();
  cancel = output();
  titleButton = input.required<string>();

  bookForm = inject(FormBuilder).group({
    id: [0],
    title: ['', Validators.required ],
    description: ['', Validators.required ]
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book'] && changes['book'].currentValue) {
      this.bookForm.setValue(changes['book'].currentValue);
    }
  }

  clickToCancel(): void {
    this.cancel.emit();
  }

  clear(): void {
    this.bookForm.reset({
      description: '',
      id: 0,
      title: ''
    });
  }

  save(): void {
    this.requestToSave.emit(this.bookForm.value as Book);
  }

  get isCancelAble(): boolean {
    console.info(this.book()?.id !== 0);
    return typeof(this.book()) !== 'undefined' && this.book()?.id !== 0;
  }
}
