import { Component, Input } from '@angular/core'

@Component({
  selector: 'core-hint',
  template: `<span
    class="block text-[11px] font-mono text-gray-700"
    [attr.aria-label]="ariaLabel"
  >
    <ng-content></ng-content>
  </span>`,
  standalone: true,
})
export class CoreHint {
  @Input() ariaLabel!: string
}
