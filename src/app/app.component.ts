import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { HijoComponent } from "./hijo/hijo.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent, FooterComponent, NgOptimizedImage, HeaderComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

}
