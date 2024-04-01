import {Component, inject, OnInit} from '@angular/core'
import {MatButton} from '@angular/material/button'
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet} from '@angular/router'
import {CoreButton, CoreDatepicker, CoreFormField, CoreLabel, LoaderComponent,} from '@socle/ui'
import {filter} from "rxjs";
import {LoadingService} from "@socle/core/services";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton,
    LoaderComponent,
    CoreButton,
    CoreDatepicker,
    CoreFormField,
    CoreLabel,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  title = 'socle'
  private readonly _router = inject(Router);
  private readonly _loadingService = inject(LoadingService);

  ngOnInit(): void {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        this._loadingService.start();
      });

    this._router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      .subscribe(() => {
        this._loadingService.stop();
      });
  }
}
