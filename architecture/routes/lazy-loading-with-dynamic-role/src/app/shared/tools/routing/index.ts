import { inject } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthenticateService } from "../../services/authenticate.service";
import { Injectable } from '@angular/core';

// SEE : https://dev.to/bergermarko/authentication-preload-strategy-4a07
// Because here, preload strategy only call in the first Application loading

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  private authenticate = inject(AuthenticateService);

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    let result: Observable<any> = of(null);

    console.info('==> preload');

    if (route.data && route.data['preload']) {
      console.info("this.authenticate.isAdmin", this.authenticate.isAdmin);

      if (this.authenticate.isAdmin) {
        console.info('==> isAdmin preload ok !');
        result = fn();
      }
    }

    return result;
  }
}
