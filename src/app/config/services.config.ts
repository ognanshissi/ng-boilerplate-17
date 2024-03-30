import {JwtHelperService} from "@auth0/angular-jwt";
import {EnvironmentProviders, Provider} from "@angular/core";

export const servicesConfig: (EnvironmentProviders | Provider)[] = [
  JwtHelperService,
]
