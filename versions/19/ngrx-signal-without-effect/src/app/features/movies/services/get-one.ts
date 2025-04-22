import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GetOne {
  getOne(id: number): Observable<Movie> {
    const item: Movie = {
      id: 1,
      title: 'The Shawshank Redemption',
      overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne, a shepherd boy, is convicted of murdering his wife and her lover, and sentenced to two years in prison. The second sentence shall be commuted to nine years, according to the specified conditions. The prison escape is a major theme in the novel since it has inspired a multitude of films, including "To Kill a Mockingbird", "The Silence of the Lambs", "Goodfellas", "The Departed", "The Godfather Part II", "The Dark Knight", and "Schindler\'s List".',
      release_date: '1994-09-23'
    }
    return of(item).pipe(delay(1500));
  }
}
