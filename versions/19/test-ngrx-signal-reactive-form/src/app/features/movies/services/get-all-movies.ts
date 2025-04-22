import { Injectable } from '@angular/core';
import { Movie } from '../store/models';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllMovies {
  updateOne(movie: Movie): Observable<Movie> {
    return of(movie).pipe(delay(1000));
  }
}
