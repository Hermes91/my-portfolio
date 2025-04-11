import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root', 
})
export class LanguageService {
  private currentLanguage: 'en' | 'spa' = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'spa' : 'en';
    this.translate.use(this.currentLanguage);
    localStorage.setItem('language', this.currentLanguage); 
  }

  getLanguage(): 'en' | 'spa' {
    return this.currentLanguage;
  }
}
