
import { bootstrapApplication } from '@angular/platform-browser';
import { HomePageComponent } from './app/pages/home-page/home-page.component';
import { EnvironmentProviders, Provider } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

var providers: Array<Provider | EnvironmentProviders> = [
  provideHttpClient()
];

bootstrapApplication(HomePageComponent, { providers }).then(application => {
});
