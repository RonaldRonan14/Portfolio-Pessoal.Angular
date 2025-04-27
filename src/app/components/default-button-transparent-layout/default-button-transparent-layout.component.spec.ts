import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultButtonTransparentLayoutComponent } from './default-button-transparent-layout.component';

describe('DefaultButtonTransparentLayoutComponent', () => {
  let component: DefaultButtonTransparentLayoutComponent;
  let fixture: ComponentFixture<DefaultButtonTransparentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultButtonTransparentLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultButtonTransparentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
