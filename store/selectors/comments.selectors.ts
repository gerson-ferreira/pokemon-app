import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

export const selectComments = (state: AppState) => state.comments.comments;

export const selectPokemonComments = (pokemonId: number) =>
  createSelector(selectComments, (comments) => {
    const commentsArray = Object.values(comments);
    return commentsArray.filter((comment) => comment.pokemonId === pokemonId);
  });
