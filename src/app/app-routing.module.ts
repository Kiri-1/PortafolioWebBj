import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'cuerpo', pathMatch: 'full' },
  { path: 'inicio', component: CuerpoComponent },
  {path:  'sobremi', component: SobreMiComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
