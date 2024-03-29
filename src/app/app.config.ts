import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { customInterceptor } from './Services/custom.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptors([customInterceptor])),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'black' },
    },
  ],
};
