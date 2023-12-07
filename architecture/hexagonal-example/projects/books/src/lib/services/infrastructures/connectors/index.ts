import { Injectable, inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Book } from "../../../models";
import { HttpClient } from "@angular/common/http";

const fakeValue = {
  addOne(book: Book | undefined): Observable<Book | undefined> {
    return of(book)
  }
}


@Injectable({
  providedIn: 'root',
  useValue: fakeValue
})
export class AddBookConnector {
  private readonly url = 'http://localhost/book';
  private readonly client = inject(HttpClient);

  addOne(book: Book | undefined): Observable<Book | undefined> {
    if (typeof book !== 'undefined') {
      return this.client.post<Book>(this.url, book);
    }

    return of(undefined);
  }
}
