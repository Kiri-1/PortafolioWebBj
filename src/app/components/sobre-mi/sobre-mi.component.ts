import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
  
})
export class SobreMiComponent {
  mostrarTecnologias: boolean = false;
  textoBoton: string = 'Leer más';


  toggleTecnologias() {
    this.mostrarTecnologias = !this.mostrarTecnologias;
    this.textoBoton = this.mostrarTecnologias ? 'Leer menos' : 'Leer más';
   
  }
}


