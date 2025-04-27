import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultContactMeLayoutComponent } from './default-contact-me-layout.component';

describe('DefaultContactMeLayoutComponent', () => {
  let component: DefaultContactMeLayoutComponent;
  let fixture: ComponentFixture<DefaultContactMeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultContactMeLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultContactMeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
