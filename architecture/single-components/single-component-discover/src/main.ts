import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainStandaloneComponent } from './app/main-standalone/main-standalone.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(MainStandaloneComponent)
//   .catch(err => console.error(err));
bootstrapApplication(MainStandaloneComponent, {
  providers: [

  ]
});
