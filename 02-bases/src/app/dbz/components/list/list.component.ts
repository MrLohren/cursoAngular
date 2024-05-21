import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-char-list',
    templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  public charList : Character[] = []

  @Output()
  onDeletedId : EventEmitter<string> = new EventEmitter()

  deleteCharByUuid(uuid : string) : void {
    this.onDeletedId.emit(uuid)
  }

}
