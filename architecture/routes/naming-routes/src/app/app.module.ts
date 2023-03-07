import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WookiesComponent } from './wookies/wookies.component';
import { WookiesSidebarComponent } from './wookies-sidebar/wookies-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WookiesComponent,
    WookiesSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
