import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
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
