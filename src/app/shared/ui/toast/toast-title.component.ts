import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'core-toast-title',
  standalone: true,
  template: `
    <ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class CoreToastTitle {

}
