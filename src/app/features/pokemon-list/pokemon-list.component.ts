import { Component, OnInit } from '@angular/core';

import { PokemonService } from '@app/core/services/pokemon.service';
import { Pokemon } from '@app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  filteredPokemons: Pokemon[] = [];
  allPokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.fetchPokemons(0);
  }

  fetchPokemons(offset: number): void {
    this.pokemonService.getPokemonList(offset).subscribe((pokemons) => {
      this.allPokemons = pokemons;
      this.filteredPokemons = pokemons;
    });
  }

  onFilterChange(filterValue: string): void {
    if (!filterValue) {
      this.filteredPokemons = this.allPokemons;
    } else {
      this.filteredPokemons = this.allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
  }
}
