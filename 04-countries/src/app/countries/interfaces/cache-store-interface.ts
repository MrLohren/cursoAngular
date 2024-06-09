import { Country } from "./country.interface"
import { Region } from "./region.type"

export interface CacheStore {
  byCapital : TermCountries
  byCountry : TermCountries
  byRegion  : RegionCountry,
}

export interface TermCountries {
  term : string,
  countries : Country[]
}

export interface RegionCountry {
  term      : Region,
  countries : Country[]
}
