import { CdkMenuItem } from '@angular/cdk/menu'
import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'core-menu-item',
    standalone: true,
    imports: [CommonModule],
    template: `<ng-content></ng-content>`,
    hostDirectives: [
        {
            directive: CdkMenuItem,
            inputs: ['cdkMenuItemDisabled: disabled'],
        },
    ],
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .cdk-menu-item {
                @apply px-5 py-2 cursor-pointer font-rale;
                outline: none;

                &:hover {
                    background-color: rgba(var(--snq-primary-color-rgb), 0.3);
                }
            }
        `,
    ],
})
export class MenuItemComponent {}
