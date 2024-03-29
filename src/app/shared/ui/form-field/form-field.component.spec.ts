import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CoreFormField } from './form-field.component'

describe('FormFieldComponent', () => {
    let component: CoreFormField
    let fixture: ComponentFixture<CoreFormField>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CoreFormField],
        })
        fixture = TestBed.createComponent(CoreFormField)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
