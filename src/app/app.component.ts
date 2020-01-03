import { Component } from '@angular/core';
import { CourseItem } from './course-page/models/course-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-course';

  isAuth = true;
  courseItem: CourseItem;

  constructor() {
  }

  openLoginPopup($event): void {
    // this.isAuth = false;
  }
}
