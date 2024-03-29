import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreAnchor, CoreButtonBase } from './button'

@NgModule({
    declarations: [CoreButtonBase, CoreAnchor],
    imports: [CommonModule],
    exports: [CoreButtonBase, CoreAnchor],
})
export class CoreButton {}
