import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-orange',
  imports: [],
  templateUrl: './button-orange.component.html',
  styleUrl: './button-orange.component.scss'
})
export class ButtonOrangeComponent {
  @Input() text: string = "";
}
