import { Component, OnInit } from '@angular/core';
import { CoursePageItem } from '../../course-item';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  public courseItems: CoursePageItem[] = [
    {
      id: 1,
      title: 'Video course name',
      description: 'fggdfg dgfdfg gdfgd'
    },
    {
      id: 2,
      title: 'Video course name',
      description: 'sdfsdfs gss sggsfg gsfg sgsgs g'
    },
    {
      id: 3,
      title: 'Video course name',
      description: 'fdf gsdsf dgfdfgdf dhdghrqertqrt tretw'
    },
    {
      id: 4,
      title: 'Video course name',
      description: 'fggdfg dgfdfg gdfgd lorem'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
