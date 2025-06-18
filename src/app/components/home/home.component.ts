import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from '../about/about.component';
import { WorkComponent } from '../work/work.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, AboutComponent, WorkComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  imageSrc = '../../../assets/cartridge-textless.webp';
  isLoading = true;
  imageSize: string = 'large';
  constructor(private breakpointObserver: BreakpointObserver) {}

  smallImage = '../../../assets/cartridge-textless-small.webp';
mediumImage = '../../../assets/cartridge-textless-medium.webp';
largeImage = '../../../assets/cartridge-textless.webp';

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.imageSize = 'small';
          this.imageSrc = this.smallImage
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.imageSize = 'medium';
          this.imageSrc = this.mediumImage
        } else {
          this.imageSize = 'large';
          this.imageSrc = this.largeImage
        }
      });
  }

  onImageLoad() {
    this.isLoading = false;
  }

  onImageError() {
    this.imageSrc = '../../../assets/cartridge-textless_low.webp';
    this.isLoading = false;
  }
}
