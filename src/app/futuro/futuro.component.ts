import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-futuro',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './futuro.component.html',
  styleUrl: './futuro.component.css'
})
export class FuturoComponent {
  width = '';
}
