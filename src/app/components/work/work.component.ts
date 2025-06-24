import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@Component({
  selector: 'app-work',
  imports: [TranslateModule, RouterLink, RouterLinkActive, CommonModule, ProgressSpinnerModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  isLoading: boolean[] = [true, true, true];

  items = [
    {
      link: '/work/logos',
      alt: 'Logos',
      src: 'https://ik.imagekit.io/07dp280wef/my-portfolio/packageFinal3.webp?updatedAt=1750353934709',
    },
    {
      link: '/work/illustrations',
      alt: 'Illustrations',
      src: 'https://ik.imagekit.io/07dp280wef/my-portfolio/packageFinal1.webp?updatedAt=1750353935309',
    },
    {
      link: '/work/branding',
      alt: 'Branding',
      src: 'https://ik.imagekit.io/07dp280wef/my-portfolio/packageFinal2.webp?updatedAt=1750353935464',
    },
  ];

  onImageLoad(index: number) {
    this.isLoading[index] = false;
  }
}
