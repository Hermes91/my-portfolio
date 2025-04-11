import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-background-float',
  imports: [],
  template: '',
  styleUrl: './background-float.component.scss'
})
export class BackgroundFloatComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  
   icons = ['pi-pencil', 'pi-brush', 'pi-lightbulb', 'pi-eye', 'pi-palette', 'pi-send']; 
  

  ngOnInit(): void {
    const count = 30;
    for (let i = 0; i < count; i++) {
      const icon = this.renderer.createElement('i');
      const randomIcon = this.icons[Math.floor(Math.random() * this.icons.length)];


      this.renderer.addClass(icon, 'pi');
      this.renderer.addClass(icon, randomIcon);
      this.renderer.addClass(icon, 'pencil');
      
      icon.style.left = `${Math.random() * 100}vw`;
      icon.style.bottom = `-${Math.random() * 30}vh`;
      icon.style.fontSize = `${1 + Math.random() * 0.9}rem`;
      icon.style.animationDuration = `${10 + Math.random() * 5}s`;
      this.renderer.appendChild(this.el.nativeElement, icon);
    }
  }

}
