import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
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

}
