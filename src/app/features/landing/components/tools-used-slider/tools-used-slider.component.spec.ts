import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsUsedSliderComponent } from './tools-used-slider.component';

describe('ToolsUsedSliderComponent', () => {
  let component: ToolsUsedSliderComponent;
  let fixture: ComponentFixture<ToolsUsedSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsUsedSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolsUsedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
