import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  imports: [TranslateModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  imageSrc1 = '../../../assets/packageFinal1.png';
  imageSrc2 = '../../../assets/packageFinal1.png';
  imageSrc3 = '../../../assets/packageFinal1.png';
  isLoading = true;

  onImageLoad() {
    this.isLoading = false;
  }

  onImageError() {
    this.imageSrc1 = '../../../assets/packageFinal1low.gif';
    this.imageSrc2 = '../../../assets/packageFinal2low.gif';
    this.imageSrc3 = '../../../assets/packageFinal3low.gif';
    this.isLoading = false;
  }
}
