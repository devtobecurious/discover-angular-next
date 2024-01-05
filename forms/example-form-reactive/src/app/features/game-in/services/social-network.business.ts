import { Injectable, inject } from "@angular/core";
import { SocialNetworkInfra } from "./social-network.infra";
import { Observable } from "rxjs";
import { SocialNetworks } from "../models";

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkBusiness {
  private infra = inject(SocialNetworkInfra);

  getAll(): Observable<SocialNetworks> {
    return this.infra.getAll();
  }
}
