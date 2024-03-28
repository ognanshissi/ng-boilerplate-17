import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";


const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
}

export default authGuardFn;
