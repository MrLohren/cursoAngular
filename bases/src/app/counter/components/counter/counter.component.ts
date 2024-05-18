import { Component } from "@angular/core";

@Component(
  {
    selector : 'app-counter',
    template : `

      <p>
        Hola -> {{cont}}
      </p>

      <button (click)="increasyBy(+1)" >+1</button>
      <button (click)="resetCont()" >Reset</button>
      <button (click)="increasyBy(-1)" >-1</button>

    `
  }
)
export class CounterComponent {

  public cont:number = 10

  increasyBy(amm:number):void{
    this.cont += amm
  }

  resetCont():void{
    this.cont = 10
  }
}
