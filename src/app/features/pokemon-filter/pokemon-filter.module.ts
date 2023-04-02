import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PokemonFilterComponent } from './pokemon-filter.component';

@NgModule({
  declarations: [PokemonFilterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PokemonFilterComponent],
})
export class PokemonFilterModule {}
