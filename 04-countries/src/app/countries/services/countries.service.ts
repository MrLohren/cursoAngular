import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private API_URL = 'https://restcountries.com/v3.1/'

  constructor(private http : HttpClient) {

  }

  searchCountryByAlphaCode ( query : string ) : Observable<Country | null> {
    const url = `${this.API_URL}/alpha/${ query }`

    return this.http.get<Country[]>( url )
    .pipe(
      map( countries => countries.length > 0 ? countries[0] : null ),
      catchError( () => of(null) )
    )
  }

  searchCapital( query : string ) : Observable<Country[]> {

    const url = `${this.API_URL}/capital/${ query }`

    return this.http.get<Country[]>( url )
    .pipe(
      catchError( () => of([])
       )
    )

  }

  searchCountry ( query : string ) : Observable<Country[]>{
    const url = `${this.API_URL}/name/${ query }`

    return this.http.get<Country[]>( url )
    .pipe(
      catchError( () => of([])
       )
    )
  }

  searchRegion ( query : string ) : Observable<Country[]>{
    const url = `${this.API_URL}/region/${ query }`

    return this.http.get<Country[]>( url )
    .pipe(
      catchError( () => of([])
       )
    )
  }

}
