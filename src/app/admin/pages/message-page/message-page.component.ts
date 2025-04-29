import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { NavigationLayoutComponent } from "../../../admin/components/navigation-layout/navigation-layout.component";

@Component({
  selector: 'app-message-page',
  imports: [
    HeaderComponent, 
    NavigationLayoutComponent
  ],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.scss'
})
export class MessagePageComponent {

}
