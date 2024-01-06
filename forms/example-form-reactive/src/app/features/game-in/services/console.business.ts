import { Injectable, inject } from "@angular/core";
import { ConsoleInfra } from "./console.infra";
import { Observable } from "rxjs";
import { GameConsoles } from "../models";

@Injectable( {providedIn: 'root'})
export class ConsoleBusiness {
  private readonly infra = inject(ConsoleInfra);

  getAll(): Observable<GameConsoles> {
    return this.infra.getAll();
  }
}
