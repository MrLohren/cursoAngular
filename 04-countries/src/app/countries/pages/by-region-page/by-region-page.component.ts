import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries : Country[] = []

  constructor (private countriesService : CountriesService) {}

  searchByRegion ( query : string ) {
    this.countriesService.searchRegion( query )
    .subscribe( countries => {
      this.countries = countries
    } )
  }
}
