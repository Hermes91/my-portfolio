import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarModule } from 'primeng/sidebar';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [SidebarModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sidebarVisible: boolean = false;
  language: 'en' | 'spa' = 'en'; 

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.getLanguage();
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
