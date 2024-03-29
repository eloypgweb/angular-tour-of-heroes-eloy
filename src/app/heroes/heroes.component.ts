import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  
nombre  = 'Eloyyy';
heroe: Hero = {
  id: 1,
  name: 'Gitman'
}
heroes=HEROES; //asignación del mock, de la variable, por eso está en mayúsculas
selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
