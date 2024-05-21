import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-char-form',
  templateUrl: './char-form.component.html',
  styleUrl: './char-form.component.css'
})
export class CharFormComponent {

  @Output()
  onNewCharacter : EventEmitter<Character> = new EventEmitter()

  public character : Character = {
    name : '',
    power: 0,
    uuid : ''
  }

  addCharacter() : void {
    if(this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)

    this.character.name = ''
    this.character.power = 0
    this.character.uuid = ''
  }

}
