import { ApplicationConfig, declareWebMcpTool, provideBrowserGlobalErrorListeners, provideWebMcpTools } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideWebMcpTools([
      {
        name: 'hello',
        description: 'Says hello',
        inputSchema: {type: 'object', properties: {}},
        execute: async () => ({content: [{type: 'text', text: 'Hello, World!'}]})
      },
    ])
  ]
};
