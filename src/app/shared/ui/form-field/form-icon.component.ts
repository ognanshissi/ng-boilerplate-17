import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'core-icon',
    template: `<ng-content></ng-content>`,
    standalone: true,
    imports: [CommonModule],
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            core-icon {
                @apply -ml-10 text-accent flex;
            }
        `,
    ],
})
export class CoreIcon {}
