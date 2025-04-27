import { Component, ViewChild } from '@angular/core';
import { DefaultMenuLayoutComponent } from "../default-menu-layout/default-menu-layout.component";

@Component({
  selector: 'app-default-header-layout',
  imports: [DefaultMenuLayoutComponent],
  templateUrl: './default-header-layout.component.html',
  styleUrl: './default-header-layout.component.scss'
})
export class DefaultHeaderLayoutComponent {
  @ViewChild(DefaultMenuLayoutComponent) menuComponent!: DefaultMenuLayoutComponent;

  toggleMenu() {
    this.menuComponent.toggleMenu();
  }
}
