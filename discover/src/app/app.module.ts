import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './core/containers/app/app.component';
import { AppRoutingModule } from './core/routings/app-routing.module';
import { WookieModule } from './features/wookies/wookie.module';
import { HurlementPipe } from './shared/pipes/hurlement.pipe';
import { SearchComponent } from './shared/components/search/search.component';
import { MenuComponent } from './shared/components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WookieModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
