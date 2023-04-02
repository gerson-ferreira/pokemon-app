import { FavoritesState } from './favorites.state';
import { CommentsState } from './comments.state';

export interface AppState {
  favorites: FavoritesState;
  comments: CommentsState;
}
