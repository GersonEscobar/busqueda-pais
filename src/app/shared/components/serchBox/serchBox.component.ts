import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-serchBox',
  templateUrl: './serchBox.component.html',
  styleUrls: ['./serchBox.component.css']
})
export class SerchBoxComponent implements OnInit, OnDestroy {
  
  /* es un tipo especial de observable */
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;
  
  @Input()
  placeholder: string = '';

  @Input()
  initialValue : string = ''

  @Input()
  initialValueByCountry : string = ''
  
  @Output()
  onValue = new EventEmitter<string>();
  
  @Output()
  onDebounce = new EventEmitter<string>();


  
  ngOnInit(): void {
    /* cuando se deja de escribir espera 300 milesimas y se ejecuta onKeyPress automaticamente */
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value =>{
      this.onDebounce.emit( value );
      console.log('debouncer value', value)
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }


  emitValue(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPres(searchTerm: string){
    this.debouncer.next( searchTerm);
  }

}
