import { Routes } from "@angular/router";
import { CreateOneGameSession } from "./components/create-one-game-session/create-one-game-session";

export const gamesSessionsRoutes: Routes = [
  {
    path: 'create',
    component: CreateOneGameSession
  }
]
