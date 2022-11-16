import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pages/pokemon.component';


@NgModule({
  declarations: [PokemonComponent],
  imports: [FormsModule, CommonModule],
})
export class PokemonModule {}
