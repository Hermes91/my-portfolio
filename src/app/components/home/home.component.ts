import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from '../about/about.component';
import { WorkComponent } from '../work/work.component';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, AboutComponent, WorkComponent, CommonModule, ProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {
  isLoading = true;

  onImageLoad() {
    this.isLoading = false;
  }

  onImageError() {
    console.warn('Image failed to load and this site sucks');
    this.isLoading = false;
  }
}
