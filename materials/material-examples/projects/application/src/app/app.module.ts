import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakpointObserverComponent } from './breakpoint-observer/breakpoint-observer.component';
import { DialogDisplayComponent } from './dialog-display/dialog-display.component';
import { DialogTestComponent } from './dialog-test/dialog-test.component';
import { ScrollingVirtualComponent } from './scrolling-virtual/scrolling-virtual.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogTestComponent,
    DialogDisplayComponent,
    TestComponent,
    BreakpointObserverComponent,
    ScrollingVirtualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ScrollingModule,
    MatSelectModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
