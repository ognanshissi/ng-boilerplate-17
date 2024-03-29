/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CoreDatepicker } from './datepicker.component'

describe('DatepickerComponent', () => {
    let component: CoreDatepicker
    let fixture: ComponentFixture<CoreDatepicker>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoreDatepicker],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreDatepicker)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
