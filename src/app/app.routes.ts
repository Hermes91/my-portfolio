import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { LogosComponent } from './components/work/logos/logos.component';
import { IllustrationsComponent } from './components/work/illustrations/illustrations.component';
import { BrandingComponent } from './components/work/branding/branding.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'work/logos', component: LogosComponent },
  { path: 'work/illustrations', component: IllustrationsComponent },
  { path: 'work/branding', component: BrandingComponent },
];
