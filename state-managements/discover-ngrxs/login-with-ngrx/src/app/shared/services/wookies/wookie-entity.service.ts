import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Wookie } from "src/app/core/models/wookie";

@Injectable()
export class WookieEntityService extends EntityCollectionServiceBase<Wookie> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Wookie', factory);
  }
}


