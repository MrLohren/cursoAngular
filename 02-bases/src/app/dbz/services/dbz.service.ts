import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters : Character[] = [
    {
      name : 'Krillin',
      power : 1000,
      uuid : uuid()
    },
    {
      name : 'Goku',
      power : 9200,
      uuid : uuid()
    },{
      name : 'Vegeta',
      power : 7500,
      uuid : uuid()
    },
  ]

  onNewCharacter( char : Character ) : void {
    this.characters.push({
      name : char.name,
      power: char.power,
      uuid : uuid()
    })

  }

  deleteCharByUuid(uuid : string) : void {
    this.characters = this.characters.filter(char => String(char.uuid) !== String(uuid))
  }
}
