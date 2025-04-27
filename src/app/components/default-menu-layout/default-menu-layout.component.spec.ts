import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMenuLayoutComponent } from './default-menu-layout.component';

describe('DefaultMenuLayoutComponent', () => {
  let component: DefaultMenuLayoutComponent;
  let fixture: ComponentFixture<DefaultMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultMenuLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
