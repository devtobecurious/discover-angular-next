import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WookieListComponent } from './wookie-list/wookie-list.component';
import { WookieRoutingModule } from './wookie-routing.module';
import { WookieResolver } from './resolvers/wookie.resolver';
import { WookiesEffect } from './store/effects/wookies.effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [WookieListComponent],
  imports: [
    CommonModule,
    WookieRoutingModule,
    EffectsModule.forFeature([WookiesEffect])
  ],
  providers: [
    WookieResolver
  ]
})
export class WookieModule { }
