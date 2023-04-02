import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { AppState } from 'store/state/app.state';
import { PokemonService } from '@app/core/services/pokemon.service';
import { toggleFavorite } from '@store/actions';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<Pokemon[]> = of([]);
  favoritePokemons$: Observable<Pokemon[]> = of([]);
  filterValue = '';
  filteredPokemons$: Observable<Pokemon[]> = of([]);
  constructor(private pokemonService: PokemonService, private store: Store<AppState>) { }

  ngOnInit() {
    this.pokemons$ = this.pokemonService.getPokemons();
    this.favoritePokemons$ = this.store.select(state => state.favorites.pokemons);

    this.filteredPokemons$ = this.pokemons$.pipe(
      map(pokemons => {
        return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
      }),
      startWith([])
    );
  }

  toggleFavorite(pokemon: Pokemon) {
    this.store.dispatch(toggleFavorite({ pokemon }));
  }

  onFilterValueChange(value: string) {
    this.filterValue = value;
  }
}