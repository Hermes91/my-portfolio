import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-branding',
  imports: [CommonModule, ProgressSpinner],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.scss',
})
export class BrandingComponent {
  isLoading: boolean[] = [true, true, true, true];

  imageUrls: string[] = [
    'https://ik.imagekit.io/07dp280wef/my-portfolio/branding/n.png?updatedAt=1750697398549',
    'https://ik.imagekit.io/07dp280wef/my-portfolio/branding/n1.png?updatedAt=1750697043576',
    'https://ik.imagekit.io/07dp280wef/my-portfolio/branding/n2.png?updatedAt=1750697106030',
    'https://ik.imagekit.io/07dp280wef/my-portfolio/branding/n3.png?updatedAt=1750697157432',
  ];

  onImageLoad(index: number) {
    this.isLoading[index] = false;
  }
}
