import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWookiesComponent } from './list-wookies/list-wookies.component';
import { WookiesRoutingModule } from './wookies-routing.module';



@NgModule({
  declarations: [
    ListWookiesComponent
  ],
  imports: [
    CommonModule,
    WookiesRoutingModule
  ]
})
export class WookiesModule { }
