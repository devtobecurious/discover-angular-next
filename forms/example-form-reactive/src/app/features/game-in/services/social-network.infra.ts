import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SocialNetworks } from "../models";

const inMemorySocialNetworkInfra = {
  getAll(): Observable<SocialNetworks> {
    const result: SocialNetworks = [
      { id: 1, label: 'Twitch', description: 'Tag your friend'},
      { id: 2, label: 'Youtube', description: 'Say hello'},
      //{ id: 3, label: 'Discord', description: 'Exchange'},
    ];

    return of(result);
  }
}

@Injectable({
  providedIn: 'root',
  useValue: inMemorySocialNetworkInfra
})
export class SocialNetworkInfra {
  getAll(): Observable<SocialNetworks> {
    throw new Error('Not implemented');
  }
}
