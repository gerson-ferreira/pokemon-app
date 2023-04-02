import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
    });
  }

  isPokemonFavorite(pokemon: any): boolean {
    // Implemente a lógica para verificar se o Pokémon é favorito
    return false;
  }
}
