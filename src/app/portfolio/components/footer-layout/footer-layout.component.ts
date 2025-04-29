import { Component } from '@angular/core';
import { NavigationLayoutComponent } from "../navigation-layout/navigation-layout.component";
import { SocialNetworksLayoutComponent } from "../social-networks-layout/social-networks-layout.component";

@Component({
  selector: 'app-footer-layout',
  imports: [
    NavigationLayoutComponent, 
    SocialNetworksLayoutComponent
  ],
  templateUrl: './footer-layout.component.html',
  styleUrl: './footer-layout.component.scss'
})
export class FooterLayoutComponent {

}
