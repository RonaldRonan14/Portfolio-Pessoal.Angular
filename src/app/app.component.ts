import { Component } from '@angular/core';
import { DefaultHeaderLayoutComponent } from "./components/default-header-layout/default-header-layout.component";
import { DefaultHomeLayoutComponent } from "./components/default-home-layout/default-home-layout.component";
import { DefaultServicesLayoutComponent } from "./components/default-services-layout/default-services-layout.component";
import { DefaultAboutMeLayoutComponent } from "./components/default-about-me-layout/default-about-me-layout.component";
import { DefaultContactMeLayoutComponent } from "./components/default-contact-me-layout/default-contact-me-layout.component";
import { DefaultFooterLayoutComponent } from "./components/default-footer-layout/default-footer-layout.component";

@Component({
  selector: 'app-root',
  imports: [DefaultHeaderLayoutComponent, DefaultHomeLayoutComponent, DefaultServicesLayoutComponent, DefaultAboutMeLayoutComponent, DefaultContactMeLayoutComponent, DefaultFooterLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
