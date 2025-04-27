import { Component } from '@angular/core'
import { DefaultButtonTransparentLayoutComponent } from "../default-button-transparent-layout/default-button-transparent-layout.component";
import { DefaultSocialNetworksLayoutComponent } from "../default-social-networks-layout/default-social-networks-layout.component";

@Component({
  selector: 'app-default-home-layout',
  imports: [DefaultButtonTransparentLayoutComponent, DefaultSocialNetworksLayoutComponent],
  templateUrl: './default-home-layout.component.html',
  styleUrl: './default-home-layout.component.scss'
})
export class DefaultHomeLayoutComponent {

}
