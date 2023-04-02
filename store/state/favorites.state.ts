import { Pokemon } from '../../src/app/shared/models/pokemon.model';

export interface FavoritesState {
  pokemons: Pokemon[];
}

export const initialFavoritesState: FavoritesState = {
  pokemons: [],
};
