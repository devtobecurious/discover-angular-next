import { Injectable, inject } from "@angular/core";
import { BookState, BookStore } from "../book.store";
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { Book } from "../../models";
import { AddBookConnector } from "../infrastructures/connectors";
import { Observable, concatMap, map } from "rxjs";

@Injectable({providedIn: 'root'})
export class AddBookApplication {
  private readonly store = inject(BookStore);
  private readonly connector = inject(AddBookConnector);

  constructor() {
    this.store.asObservable
    .pipe(
      concatMap(result => this.addOne(result.item)),
      takeUntilDestroyed()
    )
    .subscribe();
  }

  private addOne(book: Book | undefined): Observable<BookState> {
    return this.connector.addOne(book).pipe(
      map(item => ({item}))
    );
  }
}
