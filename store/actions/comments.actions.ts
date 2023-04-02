import { createAction, props } from '@ngrx/store';

export const addComment = createAction('[Comments] Add', props<{ comment: Comment }>());
export const deleteComment = createAction('[Comments] Delete', props<{ commentId: number }>());
