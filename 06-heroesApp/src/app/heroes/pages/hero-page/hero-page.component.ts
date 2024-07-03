import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero? : Hero

  constructor(
    private HeroesService : HeroesService,
    private ActivatedRoute : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(): void {
    this.ActivatedRoute.params.pipe(
      delay(500),
      switchMap( ({ id }) => this.HeroesService.getHeroById( id ) )
    ).subscribe( hero => {

      if( !hero ) this.goBack()


      this.hero = hero
    } )
  }

  goBack() : void {
    this.router.navigate(['heroes/list'])
  }

}
