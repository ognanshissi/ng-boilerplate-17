import { CommonModule } from '@angular/common'
import {
  Component,
  ContentChild,
  HostBinding,
  Inject,
  Input,
  Optional,
  ViewEncapsulation,
} from '@angular/core'
import { CoreInput } from '../input-native/input-native.component'
import {
  AbstractFormFieldConfigOptions,
  CORE_FORM_FIELD_OPTIONS,
  FormFieldAppearanceOption,
} from './form-field.config'
import { CoreHint } from './form-hint.component'
import { CoreLabel } from './label.component'

@Component({
  selector: 'core-form-field',
  styleUrl: './form-field.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="block mb-1" [for]="inputControl?.componentId">
      <ng-content select="core-label"></ng-content>
    </label>
    <div class="input__container">
      <ng-content
        select="mat-icon[corePrefix], button[corePrefix]"
      ></ng-content>
      <ng-content select="input[coreInput]"></ng-content>
      <ng-content
        select="mat-icon[coreSuffix], button[coreSuffix]"
      ></ng-content>
    </div>
    <ng-content select="core-hint"></ng-content>
    <ng-content select="core-error"></ng-content>
  `,
})
export class CoreFormField {
  constructor(
    @Optional()
    @Inject(CORE_FORM_FIELD_OPTIONS)
    private _formFieldOptions: AbstractFormFieldConfigOptions
  ) {}

  @Input() appearance!: FormFieldAppearanceOption

  static nextId = 0

  @HostBinding('id')
  componentId = `core-form-field-id-${CoreFormField.nextId++}`

  @ContentChild(CoreLabel) labelControl: CoreLabel | undefined

  @ContentChild(CoreFormField) errorComponent: CoreFormField | undefined

  @ContentChild(CoreHint) hintComponent: CoreHint | undefined

  @ContentChild(CoreInput)
  inputControl: CoreInput | undefined

  @HostBinding('class')
  get classes() {
    const appearance = this.appearance ?? this._formFieldOptions.appearance
    return {
      'core-form-field__container__wrapper': true,
      'core-form-field__appearance--outline': appearance === 'outline',
      'core-form-field__appearance--fill': appearance === 'fill',
      'core-form-field__rouned--full':
        this._formFieldOptions.rounded === 'full',
      'core-form-field__rouned--large':
        this._formFieldOptions.rounded === 'large',
      'core-form-field__rouned--small':
        this._formFieldOptions.rounded === 'small',
      'core-form-field__rouned--none':
        this._formFieldOptions.rounded === undefined,
    }
  }
}
