import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {LoadingService} from "@socle/core/services";

@Component({
  selector: 'core-loader',
  template: ` <mat-progress-bar
    *ngIf="loaderService.isLoading()"
    mode="indeterminate"
    color="accent"
    class="absolute top-0 left-0 w-full right-0 z-10"
  ></mat-progress-bar>`,
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
})
export class LoaderComponent {
  public loaderService = inject(LoadingService);
}
