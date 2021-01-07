import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';
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
    WookieResolver
  ]
})
export class WookieModule { }
