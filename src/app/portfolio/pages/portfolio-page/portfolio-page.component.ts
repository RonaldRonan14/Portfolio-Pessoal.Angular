import { Component, ViewEncapsulation } from '@angular/core';
import { HomePageComponent } from "../home-page/home-page.component";
import { ServicesPageComponent } from "../services-page/services-page.component";
import { AboutMePageComponent } from "../about-me-page/about-me-page.component";
import { ContactMePageComponent } from "../contact-me-page/contact-me-page.component";
import { FooterLayoutComponent } from "../../components/footer-layout/footer-layout.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { NavigationLayoutComponent } from "../../components/navigation-layout/navigation-layout.component";

@Component({
  selector: 'app-portfolio-page',
  imports: [
    HomePageComponent,
    ServicesPageComponent,
    AboutMePageComponent,
    ContactMePageComponent,
    FooterLayoutComponent,
    HeaderComponent,
    NavigationLayoutComponent
],
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioPageComponent {

}
