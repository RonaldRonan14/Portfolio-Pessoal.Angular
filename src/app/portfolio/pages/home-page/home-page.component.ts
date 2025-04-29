import { Component } from '@angular/core';
import { SocialNetworksLayoutComponent } from "../../components/social-networks-layout/social-networks-layout.component";
import { ButtonTransparentComponent } from "../../../shared/components/button-transparent/button-transparent.component";

@Component({
  selector: 'app-home-page',
  imports: [SocialNetworksLayoutComponent, ButtonTransparentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
