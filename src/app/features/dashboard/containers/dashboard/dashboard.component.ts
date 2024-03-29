import { Component } from '@angular/core'
import { MatIcon } from '@angular/material/icon'
import {
  CoreButton,
  CoreDatepicker,
  CoreFormField,
  CoreLabel,
  CorePrefix,
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
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}

export default DashboardComponent
