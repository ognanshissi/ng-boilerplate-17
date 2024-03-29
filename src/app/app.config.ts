import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import {
    provideRouter,
    withComponentInputBinding,
    withViewTransitions,
} from '@angular/router'

import {
    provideHttpClient,
    withFetch,
    withInterceptors,
} from '@angular/common/http'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { ROOT_API } from '@socle/config'
import { authInterceptorFn } from '@socle/core/interceptors'
import { environment } from '../environments/environment'
import { routes } from './app.routes'
import { IconModule } from './icon.module'

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            routes,
            withViewTransitions(),
            withComponentInputBinding()
        ),
        provideHttpClient(withFetch(), withInterceptors([authInterceptorFn])),
        provideClientHydration(),
        {
            provide: ROOT_API,
            useValue: environment.apiRoot,
        },
        provideAnimationsAsync(),
        importProvidersFrom(IconModule),
    ],
}
