import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{

  public countries : Country[] = []
  public isLoading : boolean = false
  public initialValue : string = ''

  constructor (private countriesServise : CountriesService) {}

  ngOnInit(): void {
    this.countries    = this.countriesServise.cacheStore.byCountry.countries
    this.initialValue = this.countriesServise.cacheStore.byCountry.term
  }

  searchByCountry ( term : string ) {

    this.isLoading = true

    this.countriesServise.searchCountry( term )
    .subscribe( countries => {
      this.countries = countries
      this.isLoading = false
    })
  }

}
