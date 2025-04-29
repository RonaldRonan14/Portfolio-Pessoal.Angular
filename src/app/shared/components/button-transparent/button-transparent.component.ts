import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button-transparent',
  imports: [],
  templateUrl: './button-transparent.component.html',
  styleUrl: './button-transparent.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ButtonTransparentComponent {
  @Input() text: string = "";
}
