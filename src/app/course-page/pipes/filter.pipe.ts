import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../models/course-item.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(courseItems: CourseItem[], search: string = ''): CourseItem[] {
    if ( !search.trim()) {
      return courseItems;
    }

    return courseItems.filter( course => {
      return course.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
