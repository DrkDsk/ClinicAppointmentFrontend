import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import SurfacePreset from './presets/surface';
import { withInterceptors, provideHttpClient } from '@angular/common/http';
import { baseUrlInterceptor } from './shared/interceptor/base_url.interceptor';
import { tokenInterceptor } from './core/token/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([baseUrlInterceptor, tokenInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: SurfacePreset
      }
    }),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
