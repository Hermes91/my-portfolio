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
  isLoaded = [false, false, false];

  onImageLoad(index:number) {
    this.isLoaded[index] = false;
  }
}
