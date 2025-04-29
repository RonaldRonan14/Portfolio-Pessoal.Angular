import { Component } from '@angular/core';
import { ButtonOrangeComponent } from "../../../shared/components/button-orange/button-orange.component";
import { SkillCardComponent } from "../../../shared/components/skill-card/skill-card.component";

@Component({
  selector: 'app-about-me-page',
  imports: [
    ButtonOrangeComponent, 
    SkillCardComponent
  ],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.scss'
})
export class AboutMePageComponent {

}
