import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstEasyComponent } from './shared/components/first-easy/first-easy.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { BannerComponent } from './shared/component/banner/banner.component';
import { DashboardWithNavigateComponent } from './dashboard-with-navigate/dashboard-with-navigate.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstEasyComponent,
    DashboardComponent,
    WelcomeComponent,
    BannerComponent,
    DashboardWithNavigateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
