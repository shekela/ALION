import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingToolsSliderComponent } from './landing-tools-slider.component';

describe('LandingToolsSliderComponent', () => {
  let component: LandingToolsSliderComponent;
  let fixture: ComponentFixture<LandingToolsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingToolsSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingToolsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
