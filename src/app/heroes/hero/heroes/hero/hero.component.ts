import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;
  public button1 = true;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroesDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroe():void{
    this.name = 'Spiderman';
    this.button1 = false;
  }

  changeAge():void{
    this.age = 21;
  }

  resetForm():void{
    this.name = 'Ironman';
    this.age = 45;
  }
}
