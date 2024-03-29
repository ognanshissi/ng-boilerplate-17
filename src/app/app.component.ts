import { Component } from '@angular/core'
import { MatButton } from '@angular/material/button'
import { RouterOutlet } from '@angular/router'
import {
    CoreButton,
    CoreDatepicker,
    CoreFormField,
    CoreInput,
    CoreLabel,
    LoaderComponent,
} from '@socle/ui'
import { NavigationComponent } from './layouts/navigation'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatButton,
        LoaderComponent,
        CoreButton,
        CoreDatepicker,
        CoreFormField,
        CoreLabel,
        CoreInput,
        NavigationComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'socle'
}
