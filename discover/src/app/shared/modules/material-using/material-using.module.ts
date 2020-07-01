import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialUsingModule { }
