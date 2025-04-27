import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-card-layout',
  imports: [],
  templateUrl: './default-card-layout.component.html',
  styleUrl: './default-card-layout.component.scss'
})
export class DefaultCardLayoutComponent {
  @Input() titulo: string = "";
  @Input() descricao: string = "";
}
