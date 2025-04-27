import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-button-transparent-layout',
  imports: [],
  templateUrl: './default-button-transparent-layout.component.html',
  styleUrl: './default-button-transparent-layout.component.scss'
})
export class DefaultButtonTransparentLayoutComponent {
  @Input() text: string = "";
}
