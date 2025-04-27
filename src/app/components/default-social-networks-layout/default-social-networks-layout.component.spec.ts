import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSocialNetworksLayoutComponent } from './default-social-networks-layout.component';

describe('DefaultSocialNetworksLayoutComponent', () => {
  let component: DefaultSocialNetworksLayoutComponent;
  let fixture: ComponentFixture<DefaultSocialNetworksLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSocialNetworksLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSocialNetworksLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
