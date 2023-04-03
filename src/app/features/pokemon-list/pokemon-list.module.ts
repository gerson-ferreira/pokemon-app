import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: []
})
export class PokemonListModule { }
