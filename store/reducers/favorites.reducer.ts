import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite, toggleFavorite } from '../actions/favorites.actions';
import { initialFavoritesState } from '../state/favorites.state';

export const favoritesReducer = createReducer(
  initialFavoritesState,
  on(addFavorite, (state, { pokemon }) => {
    return { ...state, pokemons: [...state.pokemons, pokemon] };
  }),
  on(removeFavorite, (state, { pokemonId }) => {
    return { ...state, pokemons: state.pokemons.filter((pokemon) => pokemon.id !== pokemonId) };
  }),
  on(toggleFavorite, (state, { pokemon }) => {
    const isFavorite = state.pokemons.some((favoritePokemon) => favoritePokemon.id === pokemon.id);
    return isFavorite
      ? { ...state, pokemons: state.pokemons.filter((favoritePokemon) => favoritePokemon.id !== pokemon.id) }
      : { ...state, pokemons: [...state.pokemons, pokemon] };
  })
);
