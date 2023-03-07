import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class PreLoaderStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    let result: Observable<any> = of(null);

    if (route.data.preload) {
      result = fn();
    }

    return result;
  }
}
