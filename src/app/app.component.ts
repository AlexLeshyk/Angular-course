import { Component } from '@angular/core';
import { AuthorizationService } from  './course-page/services/authorization.service';
import { CourseItem } from './course-page/models/course-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-course';

  inputLoginValue: string = "login";

  isAuth = true;
  modal = false;
  editCoursePage = false;
  courseItem: CourseItem;

  constructor(
    private auth: AuthorizationService
  ) {
  }

  closeLoginPopup(): void {
    this.modal = false;
    this.isAuth = true;
    console.log("successfuly log in");
    this.auth.getUserInfo(this.inputLoginValue);
  }

  getLogin(value: string) {
    this.inputLoginValue = value;
  }

  openLoginPopup($event): void {
    this.modal = true;
    this.isAuth = false;
  }

  editCourse(course: CourseItem ): void {
    this.editCoursePage = true;
    this.isAuth = false;
    this.courseItem = course;
  }

  cancelEditCourse(): void {
    this.editCoursePage = false;
    this.isAuth = true;
  }

  saveEditCourse(): void {
    this.editCoursePage = false;
    this.isAuth = true;
  }
}
