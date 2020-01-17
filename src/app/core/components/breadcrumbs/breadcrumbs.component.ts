import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../../../course-page/models/course-item.model';
import { ItemCourseService } from '../../../course-page/services/item-course.service';
import { Router, NavigationEnd} from '@angular/router';
import { AuthorizationService } from  '../../../shared/services/authorization.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  currentId: number;

  courseItem : CourseItem = {
    name: '',
    length: 0,
    id: 999,
    date: Date.now(),
    description: '',
    topRated: false
  }

  constructor(
    private itemService: ItemCourseService,
    private router: Router,
    private auth: AuthorizationService
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
    if (this.currentId) {
      this.itemService.getItemById(this.currentId).subscribe( item => {
        this.courseItem = item;
        this.courseItem.name = item.name;
      })
    }
  }

}
