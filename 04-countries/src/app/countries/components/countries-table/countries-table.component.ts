import { Country } from './../../interfaces/country.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.css'
})
export class CountriesTableComponent {

  @Input()
  public countries : Country[] = []

}
