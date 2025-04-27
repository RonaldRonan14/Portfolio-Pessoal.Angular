import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHeaderLayoutComponent } from './default-header-layout.component';

describe('DefaultHeaderLayoutComponent', () => {
  let component: DefaultHeaderLayoutComponent;
  let fixture: ComponentFixture<DefaultHeaderLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultHeaderLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultHeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
