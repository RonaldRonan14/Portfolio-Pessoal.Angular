import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNavigationLayoutComponent } from './default-navigation-layout.component';

describe('DefaultNavigationLayoutComponent', () => {
  let component: DefaultNavigationLayoutComponent;
  let fixture: ComponentFixture<DefaultNavigationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultNavigationLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultNavigationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
