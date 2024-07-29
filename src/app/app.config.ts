import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HerosService } from './services/heros.services';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideRouter(routes), provideClientHydration(), HerosService
  ],
};