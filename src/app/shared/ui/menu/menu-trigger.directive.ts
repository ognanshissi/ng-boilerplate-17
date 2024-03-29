import { CdkMenuTrigger } from '@angular/cdk/menu'
import { Directive } from '@angular/core'

@Directive({
    selector: '[coreMenuTrigger]',
    standalone: true,
    hostDirectives: [
        {
            directive: CdkMenuTrigger,
            inputs: ['cdkMenuTriggerFor: panel'],
        },
    ],
})
export class MenuTrigger {}
