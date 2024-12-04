import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-hijo',
    standalone: true,
    templateUrl: './hijo.component.html',
    styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() trabajo:string ='';
  @Input() name:string = '';
  @Output() eventoIncremento = new EventEmitter<number>();
  @Output() eventoAggItem= new EventEmitter<string>();
  //OUTPUT
  count= 1;
  incrementar(){
    this.count++;
    this.eventoIncremento.emit(this.count);
  }

  agregarItem(){
    this.eventoAggItem.emit('🐢');
  }


}
