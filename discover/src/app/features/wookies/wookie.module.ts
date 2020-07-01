import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWookiesComponent } from './list-wookies/list-wookies.component';
import { WookiesRoutingModule } from './routings/wookies-routing/wookies-routing.module';
import { HurlementPipe } from 'src/app/shared/pipes/hurlement.pipe';
import { OneWookieComponent } from './one-wookie/one-wookie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ListWookiesComponent,
    HurlementPipe,
    OneWookieComponent
  ],
  imports: [
    CommonModule,
    WookiesRoutingModule
  ]
})
export class WookieModule { }
