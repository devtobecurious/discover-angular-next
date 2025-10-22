import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { UserRole } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class UserAccessDefine {
  private readonly fakeApiData$ = of({ value: 'newbie' } satisfies UserRole).pipe(delay(1000));

  getAccess(): Observable<UserRole> {
    return this.fakeApiData$
  }
}
