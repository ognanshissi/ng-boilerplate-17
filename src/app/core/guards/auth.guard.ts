import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";

export const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
}

