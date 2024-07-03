import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id                : new FormControl<string>(''),
    superhero         : new FormControl<string>('', { nonNullable : true }),
    publisher         : new FormControl<Publisher>(Publisher.DCComics),
    alter_ego         : new FormControl(''),
    first_appearance  : new FormControl(''),
    characters        : new FormControl(''),
    alt_img           : new FormControl(''),
  });

  public publishers = [
    {id : 'Dc Comics', desc : 'DC - Comics'},
    {id : 'Marvel Comics', desc : 'Marvel - Comics'},
  ]

  constructor(
    private heroesService   : HeroesService,
    private activatedRoute  : ActivatedRoute,
    private router          : Router,
    private snackbar        : MatSnackBar,
    private dialog          : MatDialog
  ) {}

  ngOnInit(): void {

    if( !this.router.url.includes('edit') ) return

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroById( id ) ),
    )
    .subscribe(hero => {

      if(!hero) return this.router.navigateByUrl('/')

      this.heroForm.reset( hero )
      return

    })

  }

  get currentHero() : Hero {
    return this.heroForm.value as Hero
  }

  onSubmit():void {

    if(this.heroForm.invalid) return

    if( this.currentHero.id ) {
      this.heroesService.updateHero( this.currentHero )
      .subscribe( hero => {
        this.showSnackBar(`${ hero.superhero } updated!`)
      })
    }else{
      this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        this.router.navigate( [ '/heroes/edit', hero.id ] )
        this.showSnackBar(`${ hero.superhero } created!`)
      })
    }

  }

  onDeleteHero() : void {
    if( !this.currentHero.id ) throw Error ( 'Hero ID is required' )

    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
    .pipe(
      filter( ( result : boolean ) => result ),
      switchMap( () => this.heroesService.deleteHero( this.currentHero.id ) ),
      filter( (wasDeleted : boolean) => wasDeleted )
    )
    .subscribe(() => {
      this.router.navigate(['/heroes'])
    })
  }

  showSnackBar( message : string ) : void {
    this.snackbar.open( message, 'Done', {
      duration : 2500}
    )
  }

}
