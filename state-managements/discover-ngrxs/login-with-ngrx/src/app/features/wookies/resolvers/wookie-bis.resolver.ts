import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { WookieEntityService } from "src/app/shared/services/wookies/wookie-entity.service";

@Injectable()
export class WookieBisResolver implements Resolve<boolean> {

  constructor(private service: WookieEntityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.service.getAll().pipe(
      map(items => !! items)
    );
  }
}
