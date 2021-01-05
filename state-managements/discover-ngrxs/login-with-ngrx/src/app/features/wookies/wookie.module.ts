import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WookieListComponent } from './wookie-list/wookie-list.component';
import { WookieRoutingModule } from './wookie-routing.module';



@NgModule({
  declarations: [WookieListComponent],
  imports: [
    CommonModule,
    WookieRoutingModule
  ]
})
export class WookieModule { }
