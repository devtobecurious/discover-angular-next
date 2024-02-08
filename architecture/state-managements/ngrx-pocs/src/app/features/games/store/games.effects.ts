import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GamesInfrastructure } from "../services/games.infrastructure";
import { requestToGetGames, setGamesStateCommand } from "./games.actions";
import { concatMap, map } from "rxjs";

@Injectable()
export class GamesEffect {
  private readonly actions$ = inject(Actions); // Recup de l'observable des actions en cours
  private readonly infra = inject(GamesInfrastructure);

  loadGames$ = createEffect(() => this.actions$.pipe(
    ofType(requestToGetGames), // 1. On va filtrer sur la bonne action
    concatMap(action => this.infra.getAll()), // 2. On va appeler notre api
    map(games => setGamesStateCommand({items: games})) // 3. On va renvoyer l'action de mise à jour, pour le reducer
    // 4. Il faudra gérer le retour d'erreur ici :)
  ));
}
