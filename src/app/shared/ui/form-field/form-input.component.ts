import {AfterViewInit, Component, ElementRef, inject} from '@angular/core'

@Component({
  selector: '[coreInput]',
  template: `
    <ng-content></ng-content>`,
  standalone: true,
})
export class CoreInput implements AfterViewInit {
  private readonly _elementRef = inject(ElementRef);

  ngAfterViewInit() {
    if (this._elementRef.nativeElement) {
      // this._elementRef.nativeElement.classList.add('form-input');
    }
  }

}
