import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingOurSolutionsComponent } from './landing-our-solutions.component';

describe('LandingOurSolutionsComponent', () => {
  let component: LandingOurSolutionsComponent;
  let fixture: ComponentFixture<LandingOurSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingOurSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingOurSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
