import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { entityMetadata } from 'src/app/entity-metadata';
import { WookieDataService } from 'src/app/shared/services/wookies/wookie-data.service';
import { WookieEntityService } from 'src/app/shared/services/wookies/wookie-entity.service';
import { HomeComponent } from './home/home.component';
import { WookieBisResolver } from './resolvers/wookie-bis.resolver';
import { WookieResolver } from './resolvers/wookie.resolver';
import { WookiesEffect } from './store/effects/wookies.effects';
import { WookieEditComponent } from './wookie-edit/wookie-edit.component';
import { WookieListComponent } from './wookie-list/wookie-list.component';
import { WookieRoutingModule } from './wookie-routing.module';
import { WookieComponent } from './wookie/wookie.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [WookieListComponent, WookieEditComponent, WookieComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WookieRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    EffectsModule.forFeature([WookiesEffect])
  ],
  providers: [
    WookieBisResolver,
    WookieResolver,
    WookieEntityService,
    WookieDataService
  ]
})
export class WookieModule {
  constructor(private service: EntityDefinitionService,
              private entityDataService: EntityDataService,
              private wookieDataService: WookieDataService) {
    this.service.registerMetadataMap(entityMetadata);
    this.entityDataService.registerService('Wookie', wookieDataService);
  }
}
