import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { mainRoutes } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(mainRoutes)
  ]
});
