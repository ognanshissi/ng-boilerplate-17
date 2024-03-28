import { ApplicationConfig } from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import authInterceptorFn from "@socle/core/interceptors/http.interceptor";
import {ROOT_API} from "@socle/config";
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptorFn])),
    provideClientHydration(),
    {
      provide: ROOT_API,
      useValue: environment.apiRoot
    }
  ]
};
