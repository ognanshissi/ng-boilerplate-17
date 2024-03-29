import {Routes} from "@angular/router";


export const authenticationRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./containers/login/login.component')
  }
];

export default authenticationRoutes;
