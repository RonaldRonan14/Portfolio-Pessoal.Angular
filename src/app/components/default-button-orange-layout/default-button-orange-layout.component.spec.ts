import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultButtonOrangeLayoutComponent } from './default-button-orange-layout.component';

describe('DefaultButtonOrangeLayoutComponent', () => {
  let component: DefaultButtonOrangeLayoutComponent;
  let fixture: ComponentFixture<DefaultButtonOrangeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultButtonOrangeLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultButtonOrangeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
