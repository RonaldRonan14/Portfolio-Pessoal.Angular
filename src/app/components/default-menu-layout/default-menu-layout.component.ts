import { Component } from '@angular/core';
import { DefaultNavigationLayoutComponent } from "../default-navigation-layout/default-navigation-layout.component";

@Component({
  selector: 'app-default-menu-layout',
  imports: [DefaultNavigationLayoutComponent],
  templateUrl: './default-menu-layout.component.html',
  styleUrl: './default-menu-layout.component.scss'
})
export class DefaultMenuLayoutComponent {
  showMenu = false;

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }
  
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
