import { Comment } from '../../src/app/shared/models/comment.model';

export interface CommentsState {
  comments: {
    [key: number]: Comment;
  };
}

export const initialCommentsState: CommentsState = {
  comments: {},
};
