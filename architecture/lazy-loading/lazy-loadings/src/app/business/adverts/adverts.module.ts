import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdOneComponent } from './ad-one/ad-one.component';
import { AdTwoComponent } from './ad-two/ad-two.component';
import { AdThreeComponent } from './ad-three/ad-three.component';
import { AdAllComponent } from './ad-all/ad-all.component';



@NgModule({
  declarations: [AdOneComponent, AdTwoComponent, AdThreeComponent, AdAllComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdAllComponent
  ]
})
export class AdvertsModule { }
