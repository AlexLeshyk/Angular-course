import { CourseItem } from '../models/course-item.model';

export default class CourseItemState {
  CourseItems: Array<CourseItem>;
  CourseItemError: Error;
}

export const initializeState = (): CourseItemState => {
  return { CourseItems: Array<CourseItem>(), CourseItemError: null };
};
