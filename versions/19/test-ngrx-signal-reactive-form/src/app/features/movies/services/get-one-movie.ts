import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Movie } from '../store/models';

@Injectable({
  providedIn: 'root'
})
export class GetOneMovie {
  getOne(id: number): Observable<Movie> {
    const item: Movie = {
      id: 1, title: 'The Shawshank Redemption', overview: '', release_date: new Date()
    }
    return of(item).pipe(delay(1000))
  }
}
