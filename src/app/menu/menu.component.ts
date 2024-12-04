import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FuturoComponent } from '../futuro/futuro.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, HomeComponent, FuturoComponent, UserComponent],
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
