import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { UserComponent } from '../user/user.component';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgOptimizedImage, HijoComponent, UserComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  corriendo= false;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  usuarios= [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]
  //property binding
  esEditable= true;
  requerido= false;
  //event handeling
  mouseClick(){
    alert('Click en el botón');
    document.write('clickeaste el boton');
  }
  greet(){
    console.log('greeting');
  }
  message='';
  onMouseOver(){
    this.message= 'encontraste el mensaje';
  }
  onMouseOut(){
    this.message= '';
  }
  items= new Array();
  agregarItemPadre(item:string){
    this.items.push(item);
  }
  alternativeMessage= 'imagen dinamica';
  imagenDinamica= '/assets/AndresPozo.jpg';

}
