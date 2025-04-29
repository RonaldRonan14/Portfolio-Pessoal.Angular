import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-layout',
  imports: [],
  templateUrl: './navigation-layout.component.html',
  styleUrl: './navigation-layout.component.scss'
})
export class NavigationLayoutComponent {
  @Input() flexDirectionRow = false;
}
