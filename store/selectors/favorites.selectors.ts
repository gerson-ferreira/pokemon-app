import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

export const selectFavorites = (state: AppState) => state.favorites;

export const selectFavoritePokemons = createSelector(
  selectFavorites,
  (favorites) => favorites.pokemons
);

export const isPokemonFavorite = (pokemonId: number) =>
  createSelector(selectFavoritePokemons, (pokemons) =>
    pokemons.some((pokemon) => pokemon.id === pokemonId)
  );
