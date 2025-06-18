import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  imports: [TranslateModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  imageSize: string = 'large';

  constructor(private breakpointObserver: BreakpointObserver){}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe(result =>{
      if(result.breakpoints[Breakpoints.XSmall]){
        this.imageSize = 'small';
      }else if (result.breakpoints[Breakpoints.Small]){
        this.imageSize = 'medium';
      } else{
        this.imageSize = 'large'
      }
    })
  }

}
