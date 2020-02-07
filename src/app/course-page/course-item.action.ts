import { createAction, props } from '@ngrx/store';
import { CourseItem } from './models/course-item.model';

export const GetCourseItemAction = createAction('[CourseItem] - Get CourseItem');

export const BeginGetCourseItemAction = createAction('[CourseItem] - Begin Get CourseItem');

export const SuccessGetCourseItemAction = createAction(
  '[CourseItem] - Success Get CourseItem',
  props<{ payload: CourseItem[] }>()
);

export const CreateCourseItemAction = createAction(
  '[CourseItem] - Create CourseItem',
  props<CourseItem>()
);

export const BeginCreateCourseItemAction = createAction(
  '[CourseItem] - Begin Create CourseItem',
  props<{ payload: CourseItem }>()
);

export const SuccessCreateCourseItemAction = createAction(
  '[CourseItem] - Success Create CourseItem',
  props<{ payload: CourseItem }>()
);


export const UpdateCourseItemAction = createAction(
  '[CourseItem] - Update CourseItem',
  props<CourseItem>()
);

export const BeginUpdateCourseItemAction = createAction(
  '[CourseItem] - Begin Update CourseItem',
  props<{ payload: CourseItem }>()
);

export const SuccessUpdateCourseItemAction = createAction(
  '[CourseItem.id] - Success Update CourseItem',
  props<{ payload: CourseItem }>()
);

export const ErrorCourseItemAction = createAction('[CourseItem] - Error', props<Error>());
