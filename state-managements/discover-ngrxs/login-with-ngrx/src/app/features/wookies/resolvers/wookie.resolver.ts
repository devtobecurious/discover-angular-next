import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { finalize, first, tap } from "rxjs/operators";
import { ApplicationState } from "src/app/core/store/reducers";
import { loadAllWookies } from "../store/actions/wookies.actions";

@Injectable()
export class WookieResolver implements Resolve<any> {
  isLoading = false;

  constructor(private store: Store<ApplicationState>) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (! this.isLoading) {
          this.isLoading = true;
          this.store.dispatch(loadAllWookies());
        }
      }),
      first(),
      finalize(() => this.isLoading = false)
    );
  }
}
