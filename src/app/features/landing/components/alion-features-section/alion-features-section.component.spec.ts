import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlionFeaturesSectionComponent } from './alion-features-section.component';

describe('AlionFeaturesSectionComponent', () => {
  let component: AlionFeaturesSectionComponent;
  let fixture: ComponentFixture<AlionFeaturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlionFeaturesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlionFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
