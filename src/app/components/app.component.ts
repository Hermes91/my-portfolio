import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { LanguageService } from '../services/language.service';
import { isPlatformBrowser } from '@angular/common';
import { BackgroundFloatComponent } from './shared/background-float/background-float.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,BackgroundFloatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.languageService.toggleLanguage();
    }
  }
}
