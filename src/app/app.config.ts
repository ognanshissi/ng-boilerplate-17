import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {ROOT_API} from "@socle/config";
import {environment} from "../environments/environment";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {IconModule} from "./icon.module";
import {authInterceptorFn} from "@socle/core/interceptors";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptorFn])),
    provideClientHydration(),
    {
      provide: ROOT_API,
      useValue: environment.apiRoot
    },
    provideAnimationsAsync(),
    importProvidersFrom(
      IconModule,
    ),
  ]
};
