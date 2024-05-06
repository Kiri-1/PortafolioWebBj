import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: CuerpoComponent },
  { path: 'sobremi', component: SobreMiComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'tecnologias', component: TecnologiasComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
