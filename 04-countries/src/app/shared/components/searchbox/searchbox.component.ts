import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {

  @Input()
  public placeholder : string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  emitValue( value : string ) : void {
    this.onValue.emit( value )
  }
}
