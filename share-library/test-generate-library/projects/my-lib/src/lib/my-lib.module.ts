import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [MyLibComponent],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
