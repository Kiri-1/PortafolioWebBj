import { Component, ElementRef, HostListener, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProyectosComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  activate(e: Event) {
    const target = e.target as HTMLElement;
    const slider = this.elRef.nativeElement.querySelector('.slider');
    const items = this.elRef.nativeElement.querySelectorAll('.item');
    
    if (target.matches && (target.matches('.next') || target.matches('.prev'))) {
      if (target.matches('.next')) {
        this.renderer.appendChild(slider, items[0]);
      } else if (target.matches('.prev')) {
        this.renderer.insertBefore(slider, items[items.length - 1], slider.firstChild);
      }
    }
  }
}
