import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from "@angular/material/button";
import {LoaderComponent} from "@socle/ui";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'socle';
}
