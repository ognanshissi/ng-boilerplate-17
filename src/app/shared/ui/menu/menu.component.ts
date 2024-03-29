import { CdkMenu } from '@angular/cdk/menu'
import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'core-menu',
    standalone: true,
    template: `<ng-content></ng-content>`,
    imports: [CommonModule],
    hostDirectives: [CdkMenu],
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .cdk-menu {
                @apply flex flex-col border rounded-lg py-2 border-gray-300 shadow bg-white min-w-[200px];
            }
        `,
    ],
})
export class MenuComponent {}
