/// <reference types="@angular/localize" />
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/components/app.component';

registerSwiperElements()

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
