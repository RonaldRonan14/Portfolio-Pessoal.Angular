import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-navigation-layout',
  imports: [],
  templateUrl: './default-navigation-layout.component.html',
  styleUrl: './default-navigation-layout.component.scss'
})
export class DefaultNavigationLayoutComponent {
  @Input() flexDirectionRow = false;
}
