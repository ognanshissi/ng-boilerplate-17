import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    NgZone,
    OnDestroy,
    Optional,
    ViewEncapsulation,
} from '@angular/core'
import { ButtonBaseMixins } from './button-base'

@Component({
    selector:
        'button[raised-button], button[filled-button], button[outlined-button], button[text-button]',
    templateUrl: './button.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./button.scss'],
    exportAs: 'CoreButton',
})
export class CoreButtonBase extends ButtonBaseMixins {}

@Component({
    selector:
        'a[raised-button], a[filled-button], a[outlined-button], a[text-button]',
    templateUrl: './button.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./button.scss'],
    exportAs: 'CoreButton, CoreAnchor',
})
export class CoreAnchor
    extends CoreButtonBase
    implements AfterViewInit, OnDestroy
{
    constructor(@Optional() private _ngZone?: NgZone) {
        super()
    }

    override ngAfterViewInit() {
        super.ngAfterViewInit()

        /** @breaking-change 14.0.0 _ngZone will be required. */
        if (this._ngZone) {
            this._ngZone.runOutsideAngular(() => {
                this._elementRef.nativeElement.addEventListener(
                    'click',
                    this._haltDisabledEvents
                )
            })
        } else {
            this._elementRef.nativeElement.addEventListener(
                'click',
                this._haltDisabledEvents
            )
        }
    }

    override ngOnDestroy() {
        super.ngOnDestroy()
        this._elementRef.nativeElement.removeEventListener(
            'click',
            this._haltDisabledEvents
        )
    }

    _haltDisabledEvents = (event: Event): void => {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault()
            event.stopImmediatePropagation()
        }
    }
}
