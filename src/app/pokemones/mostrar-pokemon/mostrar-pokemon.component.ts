import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from './../types/IPokemon';

@Component({
  selector: 'app-mostrar-pokemon',
  templateUrl: './mostrar-pokemon.component.html',
  styleUrls: ['./mostrar-pokemon.component.scss'],
})
export class MostrarPokemonComponent  implements OnInit {

  @Input() public pokemon!: IPokemon;

  constructor() { }

  ngOnInit() {}

}
