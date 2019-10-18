import { Component, OnInit, Input } from '@angular/core';
import { CoursePage } from '../../course-item'

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() public courseItem: CoursePage;

  constructor() { }

  ngOnInit() {
  }

}
