import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent implements OnInit, OnDestroy {

  private debouncer : Subject<string> = new Subject<string>()
  private debouncerSubscription? : Subscription

  @Input()
  public initialValue : string = ''

  @Input()
  public placeholder : string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime( 300 )
    )
    .subscribe( value => {
      this.onDebounce.emit( value )
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
  }

  emitValue( value : string ) : void {
    this.onValue.emit( value )
  }

  onKeyPress ( searchTerm : string ) {
    this.debouncer.next( searchTerm )
  }
}
