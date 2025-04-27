import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-button-orange-layout',
  imports: [],
  templateUrl: './default-button-orange-layout.component.html',
  styleUrl: './default-button-orange-layout.component.scss'
})
export class DefaultButtonOrangeLayoutComponent {
  @Input() text: string = "";
}
