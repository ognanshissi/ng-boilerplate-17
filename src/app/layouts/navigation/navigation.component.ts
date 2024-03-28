import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationItem } from './navigation.types';
import {AuthHttpService, AuthService} from "@socle/core/services";

@Component({
  selector: 'shared-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterOutlet,
    NgOptimizedImage,
    OverlayModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class NavigationComponent {
  public profileDropOpened = false;
  public authRepository = inject(AuthHttpService);
  public authService = inject(AuthService);
  menuList: NavigationItem[] = [
    {
      id: 'dashboard',
      title: 'Tableau de bord',
      icon: 'chart-square',
      link: '/dashboard',
      type: 'basic',
    },
  ];
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  private readonly _router = inject(Router);

  public goToPage(item: NavigationItem) {
    this._router.navigate([item.link], item.navigationExtras);
  }
}
