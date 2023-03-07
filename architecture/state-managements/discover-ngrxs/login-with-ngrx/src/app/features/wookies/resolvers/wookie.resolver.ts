import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { ApplicationState } from "src/app/core/store/reducers";
import { loadAllWookies } from "../store/actions/wookies.actions";
import { areLoaded } from "../store/selectors/wookies.selectors";

@Injectable()
export class WookieResolver implements Resolve<any> {
  isLoading = false;

  constructor(private store: Store<ApplicationState>) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(areLoaded),
      tap(loaded => {
        console.info('loaded ?', loaded);
        if (! this.isLoading && ! loaded) {
          this.isLoading = true;
          this.store.dispatch(loadAllWookies());
        }
      }),
      filter(loaded => loaded),
      first(),
      finalize(() => this.isLoading = false)
    );
  }
}
