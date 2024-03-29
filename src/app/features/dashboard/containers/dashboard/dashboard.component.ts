import {Component} from "@angular/core";
import {CoreButton, CoreDatepicker, CoreFormField, CoreIcon, CoreInput, CoreLabel} from "@socle/ui";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  imports: [
    CoreButton,
    CoreDatepicker,
    CoreFormField,
    CoreInput,
    CoreLabel,
    MatIcon,
    CoreIcon
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
}

export default DashboardComponent;
