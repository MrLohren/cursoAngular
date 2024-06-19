import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name : string = 'Felipe'
  public gender : 'male' | 'female' = 'male'
  public invitationMap = {
    'male'    : 'invitarlo',
    'female'  : 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa'
    this.gender = 'female'
  }

  // i18nPlural
  public clients : string[] = ['Antonia', 'Alejandra','Felipe','Ninoska','Nicolas']

  public clientsMap = {
    '=0'    : 'No tenemos ningun cliente esperando.',
    '=1'    : 'Tenemos a un cliente esperando.',
    'other' : 'Tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift()
  }

  // keyvaluepipe
  public person = {
    name    : 'Felipe',
    age     : 36,
    address : 'Valle Nevado 2412'
  }

  //asyncpipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  )

  public promiseValue : Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500)
  } )
}
