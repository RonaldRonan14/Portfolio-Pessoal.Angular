import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCardLayoutComponent } from './default-card-layout.component';

describe('DefaultCardLayoutComponent', () => {
  let component: DefaultCardLayoutComponent;
  let fixture: ComponentFixture<DefaultCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCardLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
