import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class calculadora {
  add(x: number, y: number) {
    return x + y;
  }
  resta(x: number, y: number) {
    return x - y;
  }
  multi(x: number, y: number) {
    return x * y;
  }
}
const multiplicacion = (a:number, b:number) => a * b;
const resultado = multiplicacion(5,5)
console.log(resultado);
