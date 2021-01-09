import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { compareWookies } from './core/models/wookie';

export const entityMetadata: EntityMetadataMap = {
  Wookie: {
    selectId: item => item.id,
    sortComparer: compareWookies,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  },
  Weapon: {
  }
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
