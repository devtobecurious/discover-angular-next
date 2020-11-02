import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCardElementComponent } from './ng-card-element/ng-card-element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    NgCardElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    NgCardElementComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(app): void {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('my-card', el);
  }
 }
