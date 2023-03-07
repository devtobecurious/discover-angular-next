import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOneComponent } from './check-one/check-one.component';
import { CheckTwoComponent } from './check-two/check-two.component';
import { CheckThreeComponent } from './check-three/check-three.component';
import { ProgressComponent } from './progress/progress.component';
import { TableWithCssComponent } from './table-with-css/table-with-css.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartResumeComponent } from './shopping-cart-resume/shopping-cart-resume.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BetterClickComponent } from './better-click/better-click.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckOneComponent,
    CheckTwoComponent,
    CheckThreeComponent,
    ProgressComponent,
    TableWithCssComponent,
    HeaderComponent,
    ShoppingCartResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListComponent,
    BetterClickComponent
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
