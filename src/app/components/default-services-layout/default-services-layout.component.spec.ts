import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultServicesLayoutComponent } from './default-services-layout.component';

describe('DefaultServicesLayoutComponent', () => {
  let component: DefaultServicesLayoutComponent;
  let fixture: ComponentFixture<DefaultServicesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultServicesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultServicesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
