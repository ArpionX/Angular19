import { NgOptimizedImage } from '@angular/common';
import { Component, computed, effect, inject, linkedSignal, Signal, signal, untracked, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HijoComponent } from '../hijo/hijo.component';
import { UserComponent } from '../user/user.component';
import { calculadora } from './models/calculadora';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgOptimizedImage, HijoComponent, UserComponent, RouterLink, RouterLinkActive],
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

  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  activateTrial() {
    this.isTrial.set(true);
  }
  username = signal('Andres');
  desactivado = signal('false');
  desactivar = computed(() => this.desactivado().endsWith('se'));
  falso= signal(false);
  cambiarFalso () {
    this.showCount.update(value => !value);
    this.falso.update(value => !value);
  }
  activar(){
    this.desactivado.update(value => 'true');
  }
  calculadora = inject(calculadora);
  costoTotal = this.calculadora.add(50,25);
  multiplicacion = this.calculadora.multi(5,2);
  count = signal(10);
  incrementar (){
    this.cuenta.update(value => value+1);
    this.count.update(value => value+1);

  }

  // diferencia entre una signal y un computed signal y effect
  /* SIGNALS son readable y editable, es decir se pueden editar y leer, para tener mas seguridad en el signal se pueden usar los computed signals y los effects
  para que le hagan una funcion especficia al signal o para q sean READ ONLY
  EFFECTS y  COMPUTED SIGNALS se usan para mostrar informacion. Son READ ONLY, no se pueden editar esta variables usando funciones como UPDATE o SET
  COMPUTED SIGNALS se usan para mostrar informacion y dependen de otra Signal, es decir hacen track a la señal principal.
  EFFECTS se usan para mostrar un resultado o informacion de un signal
  EFFECTS CASI NO SE USAN:
  CASOS DE USO SEGUN ANGULAR
  Logging data being displayed and when it changes, either for analytics or as a debugging tool.
Keeping data in sync with window.localStorage.
Adding custom DOM behavior that can't be expressed with template syntax.
Performing custom rendering to a <canvas>, charting library, or other third party UI library.
  */
  cuenta: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  showCount = signal(false);
  conditionalCount = computed(() => {
  if (this.showCount()) {
    return `The count is ${this.count()}.`;
  } else {
    return 'Nothing to see here!';
  }
  });

  constructor(){
    effect(()=>{
      return `The count is: ${this.count()}`
    })
  }
  respuesta = effect(()=>{
    console.log( `la cuenta es: ${this.count()}`);
  });
  private loggingEffect = effect(()=>{
    console.log(`El valor de la cuenta es: ${this.count()}`);
  })
  /*effect se usa como debugger con console log. */
  conjunto:WritableSignal<Array<string>> = signal(['Andres', 'Ernesto', 'Pepe']);
  private verArray = effect(()=>{
    console.log(`user es ${this.conjunto() } y el contador es ${untracked(this.count)}`)
    this.greetings('Andres', new Date());
    console.log(getShippingOptions());
    this.seleccionar();
    console.log(this.selectedOption);
  });
  greetings(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  };

  shippingOptions = signal(['Ground', 'Air', 'Sea']);
  // Select the first shipping option by default.
  selectedOption = linkedSignal(()=> this.shippingOptions()[0]);
  changeShipping(newOptionIndex: number) {
    this.selectedOption.set(this.shippingOptions()[newOptionIndex]);
  }
  seleccionar(){
    this.changeShipping(0);
    console.log(`El método de envío seleccionado es: ${this.selectedOption()}`);
  }

  ShippingMethod:Array<string> = ['mar', 'tierra', 'aire'];

}
interface ShippingMethod{
  id: number;
  name: string;
  price: number;
}
function getShippingOptions(){
  return [{id: 1, name: 'Marítimo', price: 10}, {id: 2, name: 'Terrestre', price: 5}, {id: 3, name: 'Aéreo', price: 0}] as ShippingMethod[];
}

const firstName = signal('andres');
const firstNameCapitalized = computed(()=> firstName().toUpperCase());

console.log(firstName());
console.log(firstNameCapitalized());
firstName.set('Ernesto');
firstName.update(name => name.toUpperCase());
console.log(firstName());
console.log(firstNameCapitalized());

const lastName = signal('Doe');
const fullName = computed(() => `${firstName()} ${lastName()}`);
const nombrefull =`${firstName()} ${lastName()}`;

console.log(fullName()); // John Doe
console.log(nombrefull);
firstName.set('Jane');
console.log(fullName()); // Jane Doe
console.log(nombrefull);
