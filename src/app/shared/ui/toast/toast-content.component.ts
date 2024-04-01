import {Component} from "@angular/core";

@Component({
  selector: 'core-toast-content',
  template: `
    <ng-content></ng-content>`,
  standalone: true
})
export class CoreToastContent {

}
