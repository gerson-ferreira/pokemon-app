import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from '../actions';
import { FavoritesState, initialFavoritesState } from '../state/favorites.state';

export const favoritesReducer = createReducer(
  initialFavoritesState,
  on(addFavorite, (state, { pokemon }) => ({
    ...state,
    pokemons: [...state.pokemons, pokemon],
  })),
  on(removeFavorite, (state, { pokemonId }) => ({
    ...state,
    pokemons: state.pokemons.filter((pokemon) => pokemon.id !== pokemonId),
  }))
);
