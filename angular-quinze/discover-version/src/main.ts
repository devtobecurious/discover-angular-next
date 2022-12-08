import { ApplicationRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter, withDebugTracing } from '@angular/router';
import { MainComponent } from './app/main/main.component';
import { mainRoutes } from './app/routes';



// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const callBackApplication = (application: ApplicationRef) => {
  console.info('Youpi ça load', application);
};

bootstrapApplication(MainComponent, { providers: [ provideRouter(mainRoutes, withDebugTracing()) ] }).then(callBackApplication);

