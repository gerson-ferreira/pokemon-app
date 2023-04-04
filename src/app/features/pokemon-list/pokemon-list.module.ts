import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFilterComponent } from '../pokemon-filter/pokemon-filter.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
];

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonFilterComponent,
    PokemonCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class PokemonListModule {}
