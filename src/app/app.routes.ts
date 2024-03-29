import {Routes} from '@angular/router';
import {PortalLayoutComponent} from "./layouts/portal-layout/portal-layout.component";
import {AuthLayoutComponent} from "./layouts";

export const routes: Routes = [
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes')
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./features/authentication/authentication.routes')
  }
];
