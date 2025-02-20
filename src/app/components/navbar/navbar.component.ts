import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-navbar',
  imports: [SidebarModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sidebarVisible: boolean = false;
  language: 'en' | 'spa' = 'en'; 

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  toggleLanguage(): void {
    this.language = this.language === 'en' ? 'spa' : 'en';
    this.translate.use(this.language)
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
