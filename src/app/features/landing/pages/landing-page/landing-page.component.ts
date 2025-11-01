import { Component, HostListener } from '@angular/core';
import { LandingHeaderComponent } from '../../components/landing-header/landing-header.component';
import { LandingHeroComponent } from '../../components/landing-hero/landing-hero.component';
import { AlionFeaturesSectionComponent } from '../../components/alion-features-section/alion-features-section.component';
import { ToolsUsedSliderComponent } from '../../components/tools-used-slider/tools-used-slider.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    LandingHeaderComponent,
    LandingHeroComponent,
    ToolsUsedSliderComponent,
    AlionFeaturesSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 60) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }
}
