import { Component, OnInit } from '@angular/core';
import { CoursePage } from '../../course-item';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  public courseItems: Array<CoursePage> = [
    {
      id: 1,
      title: 'Video course name',
      description: 'fggdfg dgfdfg gdfgd',
      duration: 30
    },
    {
      id: 2,
      title: 'Video course name',
      description: 'sdfsdfs gss sggsfg gsfg sgsgs g',
      duration: 40
    },
    {
      id: 3,
      title: 'Video course name',
      description: 'fdf gsdsf dgfdfgdf dhdghrqertqrt tretw',
      duration: 45
    },
    {
      id: 4,
      title: 'Video course name',
      description: 'fggdfg dgfdfg gdfgd lorem',
      duration: 56
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
