import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailComponent,
  },
];

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PokemonDetailComponent],
})
export class PokemonDetailModule {}
