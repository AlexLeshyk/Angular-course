import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseItem } from './course-page/models/course-item.model';
import { ItemCourseService } from './course-page/services/item-course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<CourseItem> {
  constructor(
    private courseService: ItemCourseService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CourseItem> | Promise<CourseItem> | CourseItem {
    return this.courseService.getItemById(+route.params['id']);
  }
}
