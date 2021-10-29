import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWookiesComponent } from './list-wookies/list-wookies.component';
import { WookiesRoutingModule } from './wookies-routing.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ListWookiesComponent
  ],
  imports: [
    CommonModule,
    WookiesRoutingModule,
    TranslateModule.forChild({
      extend: true
    })
  ]
})
export class WookiesModule { }
