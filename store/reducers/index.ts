import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { favoritesReducer } from './favorites.reducer';
import { commentsReducer } from './comments.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  favorites: favoritesReducer,
  comments: commentsReducer,
};
