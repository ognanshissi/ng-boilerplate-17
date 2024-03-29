import { CommonModule } from '@angular/common'
import { Component, ElementRef, HostBinding } from '@angular/core'
import { AbstractControlValueAccessorComponent } from '../abstract-control-value.control'

/**
 * Default inputs - Native Input Controls
 * ==========================================
 *
 * color
 * date
 * datetime-local
 * email
 * month
 * number
 * password
 * search
 * tel
 * text
 * time
 * url
 * week
 * -----------------------------------------------------
 */
@Component({
  selector: `
  input[coreInput][type=text],
  input[coreInput][type=number],
  input[coreInput][type=email],
  input[coreInput][type=password],
  input[coreInput][type=search],
  input[coreInput][type=tel],
  input[coreInput][type=time],
  input[coreInput][type=url],
  input[coreInput][type=color],
  input[coreInput][type=date],
  input[coreInput][type=week],
  input[coreInput][type=month]`,
  standalone: true,
  template: ``,
  styleUrls: ['./input-native.component.scss'],
  imports: [CommonModule],
})
export class CoreInput {
  @HostBinding('id')
  componentId = `core-input-id-${AbstractControlValueAccessorComponent.nextId++}`

  constructor(private _element: ElementRef) {
    this._element.nativeElement.classList.add('form-input')
  }
}
