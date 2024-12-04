import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen:boolean = false;
  hasMenuOpened:boolean = false;
  isAnimating:boolean = false;
  a = ''
  toggleMenu():void{
    if (this.isAnimating) {
      return; // Si ya está animando, no hacer nada
    }

    this.isAnimating = true;  // Inicia la animación

    if (!this.isMenuOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }

    // Para evitar el bucle o fallos, permitimos cambios después de un pequeño retraso
    setTimeout(() => {
      this.isAnimating = false;
    }, 300); // Ajusta el tiempo según la duración de la animación
  }
  openMenu():void{
    this.isMenuOpen = true;
    this.hasMenuOpened = true;
    document.body.style.overflow = 'hidden';
  }
  closeMenu():void{
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
  isLinkActive:boolean = false;
  probandoClases = 'caja ';
  clases = ['menu'];
  listBox = {
    menu: true,
  };
  aparecer = false;
  desaparecer = false;
  linksMenu = ['flex','justify-start', 'p-3', 'linksMenu'];
}
