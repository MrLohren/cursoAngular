import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public hero_name:string = 'Spiderman'
  public name:string = 'Peter'
  public age:number = 27

  changeHeroName():void{
    this.hero_name = 'Ironman'
  }

  changeName():void{
    this.name = 'Tony'
  }

  changeAge():void{
    this.age = 45
  }

  resetForm():void{
    this.hero_name = 'Spiderman'
    this.name = 'Peter'
    this.age = 27
  }
}
