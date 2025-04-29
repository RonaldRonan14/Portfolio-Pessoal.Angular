import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTransparentComponent } from './button-transparent.component';

describe('ButtonTransparentComponent', () => {
  let component: ButtonTransparentComponent;
  let fixture: ComponentFixture<ButtonTransparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTransparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
