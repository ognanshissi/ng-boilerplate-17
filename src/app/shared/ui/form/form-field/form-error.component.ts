import { Component } from '@angular/core'

@Component({
  selector: 'core-error',
  template: `<span class="block">
    <ng-content></ng-content>
  </span>`,
  standalone: true,
})
export class CoreFormError {}
