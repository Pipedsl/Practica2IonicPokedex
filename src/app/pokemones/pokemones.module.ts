import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonesPageRoutingModule } from './pokemones-routing.module';

import { PokemonesPage } from './pokemones.page';
import { MostrarPokemonComponent } from './mostrar-pokemon/mostrar-pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesPageRoutingModule,
  ],
  declarations: [PokemonesPage, MostrarPokemonComponent]
})
export class PokemonesPageModule {}
