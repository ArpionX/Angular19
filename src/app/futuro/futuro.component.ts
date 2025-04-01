import { Component } from '@angular/core';
@Component({
    selector: 'app-futuro',
    standalone: true,
    imports: [],
    templateUrl: './futuro.component.html',
    styleUrl: './futuro.component.css'
})
export class FuturoComponent {
  width = '';
  proyectosExpanded = false;
  correo:string = 'andredanielpozo@hotmail.com';
  numero:string = '(593) 0980157597';
  expandirProyecto(){
    this.proyectosExpanded = !this.proyectosExpanded;
  }
}
