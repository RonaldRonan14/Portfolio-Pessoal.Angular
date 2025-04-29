import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksLayoutComponent } from './social-networks-layout.component';

describe('SocialNetworksLayoutComponent', () => {
  let component: SocialNetworksLayoutComponent;
  let fixture: ComponentFixture<SocialNetworksLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialNetworksLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetworksLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
