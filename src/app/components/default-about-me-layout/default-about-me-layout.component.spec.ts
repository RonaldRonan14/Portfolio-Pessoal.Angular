import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAboutMeLayoutComponent } from './default-about-me-layout.component';

describe('DefaultAboutMeLayoutComponent', () => {
  let component: DefaultAboutMeLayoutComponent;
  let fixture: ComponentFixture<DefaultAboutMeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultAboutMeLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultAboutMeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
