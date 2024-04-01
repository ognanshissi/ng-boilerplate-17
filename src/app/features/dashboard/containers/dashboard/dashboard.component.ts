import {Component} from '@angular/core'
import {MatIcon} from '@angular/material/icon'
import {
  CoreButton,
  CoreDatepicker,
  CoreFormField,
  CoreLabel,
  CorePrefix,
  CoreToast,
  CoreToastContent,
  CoreToastTitle,
} from '@socle/ui'

@Component({
  standalone: true,
  imports: [
    CoreButton,
    CoreDatepicker,
    MatIcon,
    CoreFormField,
    CoreLabel,
    CorePrefix,
    CoreToast,
    CoreToastTitle,
    CoreToastContent
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
}

export default DashboardComponent
