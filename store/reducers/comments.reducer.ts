import { createReducer, on } from '@ngrx/store';
import { addComment, deleteComment } from '../actions';
import { CommentsState, initialCommentsState } from '../state/comments.state';
import { Comment } from '../../src/app/shared/models/comment.model';

function updateComments(comments: { [key: number]: Comment }, comment: Comment) {
  const updatedComments: { [key: number]: Comment } = { ...comments };
  updatedComments[comment.id] = comment;
  return updatedComments;
}

export const commentsReducer = createReducer(
  initialCommentsState,
  on(addComment, (state, { comment }) => {
    return { ...state, comments: updateComments(state.comments, comment) };
  }),
  on(deleteComment, (state, { commentId }) => {
    const { [commentId]: removed, ...rest } = state.comments;
    return { ...state, comments: rest };
  })
);
