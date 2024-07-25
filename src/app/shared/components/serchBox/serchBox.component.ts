import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-serchBox',
  templateUrl: './serchBox.component.html',
  styleUrls: ['./serchBox.component.css']
})
export class SerchBoxComponent {

  @Input()
  placeholder: string = '';
  
  @Output()
  onValue = new EventEmitter<string>();

  emitValue(value:string):void{
    this.onValue.emit(value);
  }

}
