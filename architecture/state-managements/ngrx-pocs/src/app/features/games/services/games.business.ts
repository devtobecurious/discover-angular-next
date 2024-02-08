import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Games } from "../models";
import { Store, select } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";
import { requestToGetGames } from "../store/games.actions";
import { getAllGamesSelector } from "../store/games.selectors";

@Injectable({
  providedIn: 'root'
})
export class GamesBusiness {
  private readonly store = inject(Store<ApplicationState>);

  getAll(): Observable<Games> {
    return this.store.pipe(
      select(getAllGamesSelector) // Et voilà ! :) un next sera executé à chaque fois que le state va changer !
    )
  }

  load(): void {
    this.store.dispatch(requestToGetGames()); // Requête optimiste, on part du principe que ça va fonctionner
  }
}
