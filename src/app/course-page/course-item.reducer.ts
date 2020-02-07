import { Action, createReducer, on } from '@ngrx/store';
import * as CourseItemActions from './course-item.action';
import { CourseItem } from './models/course-item.model';
import CourseItemState, { initializeState } from './state/course-item.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(CourseItemActions.GetCourseItemAction, state => state),
  on(CourseItemActions.CreateCourseItemAction, (state: CourseItemState, item: CourseItem) => {
    return { ...state, CourseItems: [...state.CourseItems, item], CourseItemError: null };
  }),
  on(CourseItemActions.UpdateCourseItemAction, (state: CourseItemState, item: CourseItem) => {
    return { ...state, CourseItems: [...state.CourseItems, item], CourseItemError: null };
  }),
  on(CourseItemActions.SuccessGetCourseItemAction, (state: CourseItemState, { payload }) => {
    return { ...state, CourseItems: payload };
  }),
  on(CourseItemActions.SuccessCreateCourseItemAction, (state: CourseItemState, { payload }) => {
    return { ...state, CourseItems: [...state.CourseItems, payload], CourseItemError: null };
  }),
  on(CourseItemActions.SuccessUpdateCourseItemAction, (state: CourseItemState, { payload }) => {
    return { ...state, CourseItems: [...state.CourseItems, payload], CourseItemError: null };
  }),
  on(CourseItemActions.ErrorCourseItemAction, (state: CourseItemState, error: Error) => {
    console.log(error);
    return { ...state, CourseItemError: error };
  })
);

export function CourseItemReducer(state: CourseItemState | undefined, action: Action) {
  return reducer(state, action);
}
