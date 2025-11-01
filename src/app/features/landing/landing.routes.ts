// src/app/features/landing/landing.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'Welcome to Alion',
  },
];
