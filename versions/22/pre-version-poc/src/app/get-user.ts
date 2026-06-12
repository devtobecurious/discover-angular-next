import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUser {
  getOne(): Observable<{ surname: string }> {
    return of({ surname: 'Obi' });
  }
}
