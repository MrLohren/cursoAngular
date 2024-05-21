import { Character } from './../interfaces/character.interface';
import { Component } from "@angular/core";
import { DbzService } from '../services/dbz.service';

@Component({
  selector : 'app-dbz-main-page',
  templateUrl : './main-page.component.html'
})
export class MainPageComponent {
  constructor( private dbzService : DbzService ){}

  get characters() : Character[] {
    return [...this.dbzService.characters]
  }

  onDeletedId( uuid : string ) : void {
    this.dbzService.deleteCharByUuid(uuid)
  }

  onNewCharacter(char : Character) : void {
    this.dbzService.addNewCharacter(char)
  }
}
