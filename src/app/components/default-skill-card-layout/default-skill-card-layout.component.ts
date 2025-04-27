import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-skill-card-layout',
  imports: [],
  templateUrl: './default-skill-card-layout.component.html',
  styleUrl: './default-skill-card-layout.component.scss'
})
export class DefaultSkillCardLayoutComponent {
  @Input() percent!: number;

  readonly circumference = 100;
  
  calculateStrokeOffset(): number {
    const filled = (this.percent / 100) * this.circumference;
    return this.circumference - filled;
  }

  @Input() title!: string;
}