import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  public courseItems: Array<CourseItem> = [
    {
      id: 1,
      title: 'Video course name',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 30,
      dateObj: Date.parse("January 26, 2020"),
      topRated: false
    },
    {
      id: 2,
      title: 'Video course name',
      description: 'some text here',
      duration: 40,
      dateObj: Date.parse("Nov 12, 2019"),
      topRated: false
    },
    {
      id: 3,
      title: 'Video course name',
      description: 'fdf gsdsf dgfdfgdf dhdghrqertqrt tretw',
      duration: 45,
      dateObj: Date.parse("Feb 20, 2020"),
      topRated: false
    },
    {
      id: 4,
      title: 'Video course name',
      description: 'fggdfg dgfdfg gdfgd lorem',
      duration: 56,
      dateObj: Date.parse("Nov 3, 2019"),
      topRated: false
    },
    {
      id: 5,
      title: 'Video course name',
      description: 'fggdfg dgfdfg gdfgd lorem',
      duration: 67,
      dateObj: Date.parse("Nov 2, 2019"),
      topRated: false
    },
    {
      id: 6,
      title: 'Video course name',
      description: 'fggdfg dgfdfg gdfgd lorem',
      duration: 22,
      dateObj: Date.parse("Oct 30, 2019"),
      topRated: true
    }
  ]

  public counter: number = 0;
  public isShowCourse: boolean = false;

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges CoursePage Component', changes);
  }

  public change(): void {
    this.counter = this.counter + 1;
    console.log(this.counter);
    this.isShowCourse = this.isShowCourse ? false : true;
  }

  constructor() { }

  ngOnInit() {
    console.log('OnInit CoursePage Component', this.counter);
  }

  public onRootDelete(item: CourseItem): void {
    this.courseItems = this.courseItems.filter((course: CourseItem) => course.id !== item.id);
    console.log(item.id);
  }

}
