import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { withInterceptors, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { baseUrlInterceptor } from './core/interceptors/base_url.interceptor';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import {CustomPreset} from './presets/presets';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([baseUrlInterceptor, tokenInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: CustomPreset
      }
    }),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
