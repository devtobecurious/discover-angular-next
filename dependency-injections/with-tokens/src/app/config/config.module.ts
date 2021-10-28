import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigLoaderService } from './config-loader.service';

export function loadConfig(service: ConfigLoaderService) {
  return () => service.load();
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ ConfigLoaderService ],
      multi: true
    }
  ]
})
export class ConfigModule { }
