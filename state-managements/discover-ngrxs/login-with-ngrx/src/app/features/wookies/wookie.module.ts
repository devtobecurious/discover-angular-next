import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EntityDefinitionService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { entityMetadata } from 'src/app/entity-metadata';
import { WookieEntityService } from 'src/app/shared/services/wookies/wookie-entity.service';
import { WookieBisResolver } from './resolvers/wookie-bis.resolver';
import { WookieResolver } from './resolvers/wookie.resolver';
import { WookiesEffect } from './store/effects/wookies.effects';
import { WookieEditComponent } from './wookie-edit/wookie-edit.component';
import { WookieListComponent } from './wookie-list/wookie-list.component';
import { WookieRoutingModule } from './wookie-routing.module';


@NgModule({
  declarations: [WookieListComponent, WookieEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WookieRoutingModule,
    MatDialogModule,
    EffectsModule.forFeature([WookiesEffect])
  ],
  providers: [
    WookieBisResolver,
    WookieEntityService
  ]
})
export class WookieModule {
  constructor(private service: EntityDefinitionService) {
    this.service.registerMetadataMap(entityMetadata);
  }
}
