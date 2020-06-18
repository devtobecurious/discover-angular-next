import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWookiesComponent } from './list-wookies/list-wookies.component';
import { WookiesRoutingModule } from './routings/wookies-routing/wookies-routing.module';
import { HurlementPipe } from 'src/app/shared/pipes/hurlement.pipe';



@NgModule({
  declarations: [
    ListWookiesComponent,
    HurlementPipe
  ],
  imports: [
    CommonModule,
    WookiesRoutingModule
  ]
})
export class WookieModule { }
