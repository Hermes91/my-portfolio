import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-background-float',
  imports: [],
  template: '',
  styleUrl: './background-float.component.scss',
})
export class BackgroundFloatComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  icons = [
    'assets/icons/iconArt.svg',
    'assets/icons/iconCoffee.svg',
    'assets/icons/iconComic.svg',
    'assets/icons/iconEye.svg',
    'assets/icons/iconIdea.svg',
    'assets/icons/iconMouse.svg',
    'assets/icons/iconUfo.svg',
  ];

  ngOnInit(): void {
    const interval = 200;
    const maxIcons = 30;
    let created = 0;

const iconGenerator = setInterval(() => {
      if (created >= maxIcons) {
        clearInterval(iconGenerator);
        return;
      }

    const img = this.renderer.createElement('img');
      const randomIcon = this.icons[Math.floor(Math.random() * this.icons.length)];

      this.renderer.setAttribute(img, 'src', randomIcon);
      this.renderer.addClass(img, 'float-icon');

      img.style.left = `${Math.random() * 100}vw`;
      img.style.bottom = `-${Math.random() * 30}vh`;
      img.style.width = `${40 + Math.random() * 30}px`;
      img.style.animationDuration = `${30 + Math.random() * 5}s`;

      this.renderer.appendChild(this.el.nativeElement, img);
      created++;
    }, interval);
  }
}