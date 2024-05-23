import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList : Gif[] = []

  private _tagsHistory : string[] = []
  private API_KEY : string = '5wrKM8TiErvbGq4n9POdn94usb3r8QzC'
  private serviceUrl : string = 'http://api.giphy.com/v1/gifs/search'

  constructor(private http : HttpClient) {
    this.loadLocalStorage()
    console.log('GIFS SERVICE READY')

  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag : string){
    tag = tag.toLowerCase()

    if(this._tagsHistory.includes(tag))
      this._tagsHistory = this._tagsHistory.filter(oldtag => oldtag != tag)

    this._tagsHistory.unshift( tag )
    this._tagsHistory = this._tagsHistory.splice(0, 10)

    this.saveLocalStorage()
  }

  private saveLocalStorage() : void {
    localStorage.setItem('history', JSON.stringify(this.tagsHistory))
  }

  private loadLocalStorage() : void {

    if(!localStorage.getItem('history')) return

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)

    if(this._tagsHistory.length === 0 ) return

    this.searchTag(this._tagsHistory[0])
  }

  searchTag( tag : string ) : void {
    if(tag.length === 0) return

    this.organizeHistory( tag )

    const params = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}`, { params })
    .subscribe( resp => {

      this.gifsList = resp.data

    } )
    // await fetch(`http://api.giphy.com/v1/gifs/search?api_key=5wrKM8TiErvbGq4n9POdn94usb3r8QzC&q=${tag}&limit=10`)
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }
}
