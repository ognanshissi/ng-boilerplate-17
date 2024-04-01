import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from "@angular/core";
import {ToastType} from "./toast.types";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'core-toast',
  templateUrl: './toast.component.html',
  standalone: true,
  imports: [
    MatIcon
  ],
  styleUrl: './toast.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreToast {
  @Input() type: ToastType = 'default';

  @HostBinding('class')
  get classes() {
    return {
      'toast__default': this.type === 'default',
      'toast__success': this.type === 'success'
    }
  }
}
