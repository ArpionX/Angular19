import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() open:boolean = false;


  probandoClases = 'caja ';
  clases = ['menu'];
  listBox = {
    menu: true,
  };
  aparecer = true;
  desaparecer = false;
  close(){
    this.aparecer = this.open;
    alert(this.open);
    alert(this.aparecer);
  }
}
