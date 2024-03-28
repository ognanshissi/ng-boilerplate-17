import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";


const noAuthGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return false;
}


export default noAuthGuardFn;
