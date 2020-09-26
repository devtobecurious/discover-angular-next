import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WookieListComponent } from './wookie-list/wookie-list.component';
import { WookiesRoutingModule } from './wookies-routing.module';



@NgModule({
  declarations: [WookieListComponent],
  imports: [
    CommonModule,
    WookiesRoutingModule
  ]
})
export class WookiesModule { }
