import { CommonModule } from '@angular/common'
import { Component, HostBinding } from '@angular/core'

@Component({
    selector: 'core-form-error',
    template: `<ng-content></ng-content>`,
    standalone: true,
    imports: [CommonModule],
})
export class FormErrorComponent {
    @HostBinding('class')
    get classes() {
        return `text-warn text-sm`
    }
}
