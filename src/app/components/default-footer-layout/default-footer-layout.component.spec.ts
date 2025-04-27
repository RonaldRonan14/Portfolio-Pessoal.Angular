import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFooterLayoutComponent } from './default-footer-layout.component';

describe('DefaultFooterLayoutComponent', () => {
  let component: DefaultFooterLayoutComponent;
  let fixture: ComponentFixture<DefaultFooterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultFooterLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultFooterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
