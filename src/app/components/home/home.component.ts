import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from "../about/about.component";
import { WorkComponent } from '../work/work.component';



@Component({
  selector: 'app-home',
  imports: [TranslateModule, AboutComponent, WorkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imageSrc="../../../assets/cartridge-textless.png" ;
  isLoading=true;

  onImageLoad(){
    this.isLoading = false
  }

  onImageError(){
    this.imageSrc = '../../../assets/cartridgetextless-LowRes.gif';
    this.isLoading = false; 
  }
} 
