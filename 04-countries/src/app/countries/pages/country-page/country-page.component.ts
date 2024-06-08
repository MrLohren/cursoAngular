import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country? : Country

  constructor (
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private countriesServices : CountriesService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesServices.searchCountryByAlphaCode( id ) )
    )
    .subscribe( country => {

      if(!country){
        return this.router.navigateByUrl('')
      }

      this.country = country
      return
    })
  }

}
