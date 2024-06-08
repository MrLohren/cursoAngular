import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries : Country[] = []

  constructor (private countriesServise : CountriesService) {}

  searchByCountry ( term : string ) {
    this.countriesServise.searchCountry( term )
    .subscribe( countries => {
      this.countries = countries
    })
  }

}
