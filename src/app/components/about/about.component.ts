import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-about',
  imports: [TranslateModule, CommonModule, ProgressSpinner],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  imageSize: string = 'large';
  isLoading = true;

  onImageLoad() {
    this.isLoading = false;
  }
}
