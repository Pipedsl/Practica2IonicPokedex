import { Component, OnInit } from '@angular/core';
import { IPokemon } from './types/IPokemon'

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  public pokemones: IPokemon[] = [
    {
      damage: 15,
      defense: 30,
      enRecuperación: false,
      id: 1,
      name: "Bulbasaur",
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      type: "Hoja"
    },
    {
      damage: 20,
      defense: 45,
      enRecuperación: false,
      id: 2,
      name: "Ivysaur",
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      type: "Hoja"
    },
    {
      damage: 20,
      defense: 45,
      enRecuperación: false,
      id: 3,
      name: "Venusaur",
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      type: "Hoja"
    },
    {
      damage: 20,
      defense: 45,
      enRecuperación: false,
      id: 4,
      name: "Charmander",
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      type: "Fuego"
    },
    {
      damage: 20,
      defense: 45,
      enRecuperación: false,
      id: 5,
      name: "Charmeleon",
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      type: "Fuego"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
