import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'auth-layout',
  standalone: true,
  templateUrl: 'auth-layout.component.html',
  imports: [
    RouterOutlet
  ]
})
export class AuthLayoutComponent {

}
