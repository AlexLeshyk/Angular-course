import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../../../course-page/models/course-item.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() courseItem : CourseItem;

  constructor() { }

  ngOnInit() {
  }

}
