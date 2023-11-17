import { ApplicationRef, EnvironmentProviders, Provider } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { MainComponent } from './app/main/main.component';
import { mainRoutes } from './app/routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const callBackApplication = (application: ApplicationRef) => {
  console.info('Youpi ça load', application);
};

var providers: Array<Provider | EnvironmentProviders> = [
  provideRouter(mainRoutes, withDebugTracing(), withPreloading(PreloadAllModules)),
  provideHttpClient()
];

bootstrapApplication(MainComponent, { providers }).then(callBackApplication);
