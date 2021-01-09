import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class WeaponEntityService extends EntityCollectionServiceBase<Wookie> {

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Weapon', factory);
  }
}
