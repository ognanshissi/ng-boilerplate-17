import {Component} from "@angular/core";
import {CoreButton, CoreDatepicker, CoreFormField, CoreInput, CoreLabel} from "@socle/ui";

@Component({
  standalone: true,
  imports: [
    CoreButton,
    CoreDatepicker,
    CoreFormField,
    CoreInput,
    CoreLabel
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
}

export default DashboardComponent;
