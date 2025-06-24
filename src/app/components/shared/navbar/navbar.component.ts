import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarModule } from 'primeng/sidebar';
import { LanguageService } from '../../../services/language.service';
import { RouterLink } from '@angular/router';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-navbar',
  imports: [SidebarModule, TranslateModule, RouterLink, CommonModule, DrawerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sidebarVisible: boolean = false;
  isDarkMode: boolean = false;
  language: 'en' | 'spa' = 'en';

  constructor(
    private languageService: LanguageService,
    @Inject(DOCUMENT) private doc: Document,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.language = this.languageService.getLanguage();
      this.isDarkMode = localStorage.getItem('darkMode') === 'true';
      if (this.isDarkMode) {
        this.renderer.addClass(this.doc.body, 'dark-theme');
      }
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());

    if (this.isDarkMode) {
      this.renderer.addClass(this.doc.body, 'dark-theme');
    } else {
      this.renderer.removeClass(this.doc.body, 'dark-theme');
    }
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
    this.language = this.languageService.getLanguage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.sidebarVisible = false;
    }
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
