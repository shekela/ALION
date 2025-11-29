import { Component } from '@angular/core';
import { LandingHeaderComponent } from '../../components/landing-header/landing-header.component';
import { LandingHeroComponent } from '../../components/landing-hero/landing-hero.component';
import { LandingOurSolutionsComponent } from '../../components/landing-our-solutions/landing-our-solutions.component';
import { LandingFeaturesComponent } from '../../components/landing-features/landing-features.component';
import { LandingToolsSliderComponent } from '../../components/landing-tools-slider/landing-tools-slider.component';
import { LandingAboutUsComponent } from '../../components/landing-about-us/landing-about-us.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    LandingHeaderComponent,
    LandingHeroComponent,
    LandingOurSolutionsComponent,
    LandingFeaturesComponent,
    LandingToolsSliderComponent,
    LandingAboutUsComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
