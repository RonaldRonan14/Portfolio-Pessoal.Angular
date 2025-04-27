import { Component } from '@angular/core';
import { DefaultNavigationLayoutComponent } from "../default-navigation-layout/default-navigation-layout.component";
import { DefaultSocialNetworksLayoutComponent } from "../default-social-networks-layout/default-social-networks-layout.component";

@Component({
  selector: 'app-default-footer-layout',
  imports: [DefaultNavigationLayoutComponent, DefaultSocialNetworksLayoutComponent],
  templateUrl: './default-footer-layout.component.html',
  styleUrl: './default-footer-layout.component.scss'
})
export class DefaultFooterLayoutComponent {

}
