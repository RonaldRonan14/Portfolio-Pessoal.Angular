import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

export interface ToggleableMenu {
  toggleMenu(): void;
}

@Component({
  selector: 'app-header',
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild(MenuComponent) menuComponent!: MenuComponent;

  toggleMenu() {
    this.menuComponent.toggleMenu();
  }
}
