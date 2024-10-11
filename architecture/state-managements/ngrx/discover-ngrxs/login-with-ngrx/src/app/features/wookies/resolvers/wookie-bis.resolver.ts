import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { filter, first, map, tap } from "rxjs/operators";
import { WookieEntityService } from "src/app/shared/services/wookies/wookie-entity.service";

@Injectable()
export class WookieBisResolver implements Resolve<boolean> {

  constructor(private service: WookieEntityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // V1
    // return this.service.getAll().pipe(
    //   tap(items => console.info('resolver bis', items)),
    //   map(items => !! items)
    // );

    // V2
    return this.service.loaded$.pipe(
      tap(loaded => {
        if (! loaded) {
          this.service.getAll();
        }
      }),
      filter(item => !!item),
      first()
    );
  }
}
