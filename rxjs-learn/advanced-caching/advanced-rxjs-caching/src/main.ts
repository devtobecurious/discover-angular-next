import { EnvironmentProviders, Provider } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { mainRoutes } from './app/routes';

const providers:(Provider | EnvironmentProviders)[] = [
  provideHttpClient(),
  provideRouter(mainRoutes, withDebugTracing(), withPreloading(PreloadAllModules))
]

bootstrapApplication(AppComponent, { providers });
