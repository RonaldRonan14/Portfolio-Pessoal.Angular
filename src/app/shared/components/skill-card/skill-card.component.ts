import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() percent!: number;

  readonly circumference = 100;
  
  calculateStrokeOffset(): number {
    const filled = (this.percent / 100) * this.circumference;
    return this.circumference - filled;
  }

  @Input() title!: string;
}
