import {ApplicationConfig, importProvidersFrom} from '@angular/core'
import {provideRouter, withComponentInputBinding, withViewTransitions,} from '@angular/router'

import {provideHttpClient, withFetch, withInterceptors,} from '@angular/common/http'
import {provideClientHydration} from '@angular/platform-browser'
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import {ROOT_API, servicesConfig} from '@socle/config'
import {authInterceptorFn} from '@socle/core/interceptors'
import {environment} from '../environments/environment'
import {routes} from './app.routes'
import {IconModule} from './icon.module'
import {AbstractFormFieldConfigOptions, CORE_FORM_FIELD_OPTIONS,} from '@socle/ui'
import {JwtModule} from "@auth0/angular-jwt";

export const coreFormOptions: AbstractFormFieldConfigOptions = {
  appearance: 'outline',
}

const tokenGetter = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('accessToken');
  }
  return null;
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([authInterceptorFn])),
    provideClientHydration(),

    provideAnimationsAsync(),
    importProvidersFrom(IconModule, JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    })),
    {
      provide: ROOT_API,
      useValue: environment.apiRoot,
    },
    {
      provide: CORE_FORM_FIELD_OPTIONS,
      useValue: coreFormOptions,
    },
    ...servicesConfig
  ],
}
