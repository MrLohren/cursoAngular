import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{

  public countries : Country[] = []
  public regions : Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion? : Region
  public isLoading : boolean = false

  constructor (private countriesService : CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.term
    this.countries      = this.countriesService.cacheStore.byRegion.countries
  }

  searchByRegion ( query : Region ) {

    this.isLoading = true

    this.selectedRegion = query

    this.countriesService.searchRegion( query )
    .subscribe( countries => {
      this.countries = countries
      this.isLoading = false
    } )
  }
}
