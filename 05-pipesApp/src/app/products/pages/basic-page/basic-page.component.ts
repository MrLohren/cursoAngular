import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  public nameLower : string = 'felipe'
  public nameUpper : string = 'FELIPE'
  public fullName  : string = 'FelIPE lAgOs'

  public customDate : Date = new Date()
}
