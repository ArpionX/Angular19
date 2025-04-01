import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
    selector: 'app-user',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, RouterLink ],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router: Router){}
  Username:string = 'Andres';
  frameworkFavorito:string = '';
  //Formularios Reactivos y validados
  formularioPerfil= new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    }
  );
  handleSubmit(){
    alert(`el nombre es:${this.formularioPerfil.value.name} y el email:${this.formularioPerfil.value.email}`);
  }
  goToFragment() {
    this.router.navigate(['/my-path'], { fragment: 'reading-the-full-response' });
  }
}
