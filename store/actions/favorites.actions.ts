import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

export const addFavorite = createAction(
  '[Favorites] Add',
  props<{ pokemon: Pokemon }>()
);
export const removeFavorite = createAction(
  '[Favorites] Remove',
  props<{ pokemonId: number }>()
);
export const toggleFavorite = createAction(
  '[Favorites] Toggle Favorite',
  props<{ pokemon: Pokemon }>()
);
