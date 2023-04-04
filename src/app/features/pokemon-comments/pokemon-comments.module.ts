import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCommentsComponent } from './pokemon-comments.component';

@NgModule({
  declarations: [PokemonCommentsComponent],
  imports: [CommonModule],
  exports: [PokemonCommentsComponent],
})
export class PokemonCommentsModule {}
