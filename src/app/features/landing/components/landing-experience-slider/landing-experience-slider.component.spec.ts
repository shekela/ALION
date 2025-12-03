import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingExperienceSliderComponent } from './landing-experience-slider.component';

describe('LandingExperienceSliderComponent', () => {
  let component: LandingExperienceSliderComponent;
  let fixture: ComponentFixture<LandingExperienceSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingExperienceSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingExperienceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
