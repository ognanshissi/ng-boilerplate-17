import {Component} from '@angular/core'

@Component({
  selector: '[coreLabel]',
  template: `
    <ng-content></ng-content>`,
  standalone: true,
  styles: [
    `
      [coreLabel] {
        @apply block w-full text-sm;
      }
    `,
  ],
})
export class CoreLabel {
}
