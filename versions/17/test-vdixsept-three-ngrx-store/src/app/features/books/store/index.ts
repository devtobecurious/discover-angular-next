import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Book } from "../models"
import { computed } from "@angular/core";

export type BooksState = {
  items: Book[];
  isLoading: boolean;
}

export const initialState: BooksState = {
  items: [],
  isLoading: false
}

export const BookStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed( ({items}) => ({
    booksCount: computed(() => items().length)
  })),
  withMethods(store => ({
    addInmemory(item: Book) {
      patchState(store, {isLoading: true});
      patchState(store, {items: [...store.items(), item]})
      patchState(store, {isLoading: false});
    }
  }))
);
