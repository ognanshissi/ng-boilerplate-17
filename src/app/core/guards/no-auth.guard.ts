import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";

export const noAuthGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return false;
}


