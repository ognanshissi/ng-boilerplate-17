import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextViewContentComponent } from './text-view-content.component';

@Component({
  selector: 'core-text-view',
  templateUrl: './text-view.component.html',
})
export class TextViewComponent {
  @Input({ required: true }) label!: string;
}

@NgModule({
  imports: [CommonModule],
  declarations: [TextViewComponent, TextViewContentComponent],
  exports: [TextViewComponent, TextViewContentComponent],
})
export class TextViewModule {}
