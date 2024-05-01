import { Component, ElementRef, ViewChild } from '@angular/core';

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



  
}
