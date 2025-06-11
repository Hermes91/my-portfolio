import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logos',
  imports: [CommonModule],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.scss'
})
export class LogosComponent {
  logos = [
    '../../../assets/logos/logo1.webp',
    '../../../assets/logos/logo8.webp',
    '../../../assets/logos/logo2.webp',
    '../../../assets/logos/logo6.webp',
    '../../../assets/logos/logo3.webp',
    '../../../assets/logos/logo5.webp',
    '../../../assets/logos/logo4.webp',
    '../../../assets/logos/logo7.webp',
    '../../../assets/logos/logo3.webp',
  ];
}
