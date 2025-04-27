import { Component } from '@angular/core';
import { DefaultButtonOrangeLayoutComponent } from "../default-button-orange-layout/default-button-orange-layout.component";
import { DefaultSkillCardLayoutComponent } from "../default-skill-card-layout/default-skill-card-layout.component";

@Component({
  selector: 'app-default-about-me-layout',
  imports: [DefaultButtonOrangeLayoutComponent, DefaultSkillCardLayoutComponent],
  templateUrl: './default-about-me-layout.component.html',
  styleUrl: './default-about-me-layout.component.scss'
})
export class DefaultAboutMeLayoutComponent {

}
