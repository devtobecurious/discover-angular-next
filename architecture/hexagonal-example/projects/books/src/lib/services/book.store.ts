import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "../models";
import { AddBookApplication } from "./applications";

export interface BookState {
  item: Book | undefined
}

export const initialAddBookState: BookState = {
  item: undefined
}

@Injectable({providedIn: 'root'})
export class BookStore {
  private readonly store = new BehaviorSubject<BookState>(initialAddBookState);

  dispatch(item: Partial<Book>): void {
    if( item.title) {
      this.store.next({
        item: {
          title: item.title
        }
      });
    }
  }

  get asObservable(): Observable<BookState> {
    return this.store.asObservable();
  }
}
