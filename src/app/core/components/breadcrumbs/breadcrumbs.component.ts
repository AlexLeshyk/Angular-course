import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../../../course-page/models/course-item.model';
import { ItemCourseService } from '../../../course-page/services/item-course.service';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  currentId: number;

  courseItem : CourseItem;

  constructor(
    private itemService: ItemCourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateId();
      }
    });
  }

  updateId(): void {
    this.currentId = this.itemService.getCurrentId();
    console.log('currentId', this.currentId)
    this.courseItem = this.itemService.getItemById(this.currentId);
  }

}
