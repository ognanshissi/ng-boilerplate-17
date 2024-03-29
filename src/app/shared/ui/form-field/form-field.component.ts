import { CommonModule } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core'

@Component({
    selector: 'core-form-field',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreFormField {
    static nextId = 0

    @HostBinding() id = `core-form-field-${CoreFormField.nextId++}`
}
