import { CommonModule } from '@angular/common'
import {
  AfterViewChecked,
  booleanAttribute,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatInputModule } from '@angular/material/input'
import { Subscription } from 'rxjs'

import { CoreLabel } from '../form-field'
import { DatepickerValue } from './datepicker.type'

@Component({
  selector: 'core-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CoreDatepicker),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CoreDatepicker),
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    CoreLabel,
  ],
})
export class CoreDatepicker
  implements
    OnInit,
    ControlValueAccessor,
    Validators,
    AfterViewChecked,
    OnDestroy
{
  static nextId = 0

  datepickerControl: FormControl = new FormControl(null) // Handle mat datepicker

  dateFieldsForm!: FormGroup

  @HostBinding() id = `core-datepicker-id-${CoreDatepicker.nextId++}`

  @Input({ transform: booleanAttribute }) required!: boolean // default => false

  @Input() minDate!: Date

  @Input() maxDate!: Date

  @Input() startDate: Date = new Date() // default start date is now date

  @Input() startView: 'year' | 'multi-year' | 'month' = 'month'

  @Input({ transform: booleanAttribute }) disabled!: boolean

  @Input() labelPosition: 'center' | 'left' = 'center'

  subscriptions: Subscription[] = []

  isFocused = false

  isBlur = false
  @ViewChild('day') private dayRef!: ElementRef
  @ViewChild('month') private monthRef!: ElementRef
  @ViewChild('year') private yearRef!: ElementRef

  constructor(private _fb: FormBuilder) {}

  get value(): DatepickerValue {
    return this.dateFieldsForm.value
  }

  set value(value: DatepickerValue) {
    const date = new Date(`${+value.month}/${+value.day}/${+value.year}`)
    this.dateFieldsForm.patchValue({ ...value }, { emitEvent: true })
    this.datepickerControl.patchValue(date, { emitEvent: true })
    this.onChange(date)
    this.onTouched()
  }

  onChange: any = () => {}

  onTouched: any = () => {}

  ngAfterViewChecked(): void {
    // Validate day field and move focus
    this.dateFieldsForm.get('day')?.valueChanges.subscribe((value) => {
      if (
        value?.toString().length == 2 &&
        this.dateFieldsForm.get('day')?.valid
      ) {
        this.monthRef.nativeElement.focus()
      }
    })

    // Validate month field and move focus
    this.dateFieldsForm.get('month')?.valueChanges.subscribe((value) => {
      if (
        value?.toString().length == 2 &&
        this.dateFieldsForm.get('month')?.valid
      ) {
        this.yearRef.nativeElement.focus()
      }
    })
  }

  ngOnInit(): void {
    this.dateFieldsForm = this._fb.group(
      {
        day: new FormControl({ value: null, disabled: this.disabled }, [
          Validators.required,
          Validators.maxLength(2),
        ]),
        month: new FormControl({ value: null, disabled: this.disabled }, [
          Validators.required,
          Validators.maxLength(2),
        ]),
        year: new FormControl({ value: null, disabled: this.disabled }, [
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4),
        ]),
      },
      {
        validators: [dateValidator(this.minDate, this.maxDate)],
      }
    )

    this.subscriptions.push(
      this.dateFieldsForm.valueChanges.subscribe((value) => {
        if (this.dateFieldsForm.valid) {
          const date = new Intl.DateTimeFormat('fr-FR').format(
            new Date(`${value.month}/${value.day}/${value.year}`)
          )
          this.datepickerControl.patchValue(date, {
            emitEvent: false,
          })
          this.onChange(new Date(`${value.month}/${value.day}/${value.year}`))
        } else {
          this.datepickerControl.patchValue('', { emitEvent: false })
          this.onChange('')
        }
        this.onTouched()
      })
    )

    this.datepickerControl.valueChanges.subscribe((value) => {
      const dateValue = new Date(value)
      if (dateValue.toString() !== 'Invalid Date') {
        const [day, month, year] = new Date(value)
          .toLocaleDateString('fr')
          .split('/')
        const date = new Date(`${+month}/${+day}/${+year}`)
        this.dateFieldsForm.patchValue(
          { day, month, year },
          { emitEvent: false }
        )
        this.onChange(date)
      } else {
        this.onChange()
      }
      this.onTouched()
    })
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.dateFieldsForm.disable() : this.dateFieldsForm.enable()
  }

  writeValue(value: any): void {
    if (value) {
      const [day, month, year] = new Date(value)
        .toLocaleDateString('fr')
        .split('/')
      this.value = new DatepickerValue(day, month, year)
    }

    if (value === null) {
      this.dateFieldsForm.reset()
      this.value = new DatepickerValue('', '', '')
    }
  }

  validate(_: AbstractControl): ValidationErrors | null {
    return this.dateFieldsForm.valid ? null : { date: { valid: false } }
  }

  clickContainer(event: Event) {
    if (!this.dateFieldsForm.get('day')?.valid) {
      this.dayRef.nativeElement.focus()
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      if (sub) {
        sub.unsubscribe()
      }
    })
  }

  public keyDownNumberCharType(event: KeyboardEvent) {
    if (
      !['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(event.key)
    ) {
      event.preventDefault()
    }
  }
}

function dateValidator(minDate: Date, maxDate: Date) {
  return (control: AbstractControl): ValidationErrors | null => {
    const { day, month, year } = control.value
    const errors: string[] = []

    if ((day && +day === 0) || +day > 31) {
      errors.push('Le jour est invalide')
    }
    if ((month && +month === 0) || +month > 12) {
      errors.push('Le mois est invalide')
    }

    // Validate year
    const currentDate = new Date(`${month}-${day}-${year}`)

    // check max
    if (maxDate && maxDate instanceof Date) {
      if (+new Date(maxDate.toLocaleDateString('en')) < +currentDate) {
        errors.push(
          `Vous devez saisir une date inférieure ou égale au ${maxDate.toLocaleDateString(
            'fr'
          )}`
        )
      }
    }

    // check min
    if (minDate) {
      if (+new Date(minDate.toLocaleDateString('en')) > +currentDate) {
        errors.push(
          `Vous devez saisir une date supérieure ou égale au ${minDate.toLocaleDateString(
            'fr'
          )}`
        )
      }
    }

    if (errors.length) {
      return { invalid: errors }
    }
    return null
  }
}
