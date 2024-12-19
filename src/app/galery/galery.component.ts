import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-galery',
    imports: [NgOptimizedImage, RouterLink, NgOptimizedImage],
    templateUrl: './galery.component.html',
    styleUrl: './galery.component.css'
})
export class GaleryComponent {

}
