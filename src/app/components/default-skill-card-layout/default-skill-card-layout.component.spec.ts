import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSkillCardLayoutComponent } from './default-skill-card-layout.component';

describe('DefaultSkillCardLayoutComponent', () => {
  let component: DefaultSkillCardLayoutComponent;
  let fixture: ComponentFixture<DefaultSkillCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSkillCardLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSkillCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
