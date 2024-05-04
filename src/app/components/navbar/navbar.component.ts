import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('menuIcon') menuIconRef!: ElementRef;
  @ViewChild('navbar') navbarRef!: ElementRef;

  ngAfterViewInit() {
    this.menuIconRef.nativeElement.addEventListener('click', () => {
      this.menuIconRef.nativeElement.classList.toggle('bx-x');
      this.navbarRef.nativeElement.classList.toggle('active');
    });
  }

  constructor(private router: Router) { }

  isInicioActive(): boolean {
    return this.router.url === '/inicio';
  }

  
}
