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
      dateObj: "Feb 25, 2018"
    },
    {
      id: 2,
      title: 'Video course name',
      description: 'some text here',
      duration: 40,
      dateObj: Date.now()
    },
    {
      id: 3,
      title: 'Video course name',
      description: 'fdf gsdsf dgfdfgdf dhdghrqertqrt tretw',
      duration: 45,
      dateObj: "Jun 15, 2019"
    },
    {
      id: 4,
      title: 'Video course name',
      description: 'fggdfg dgfdfg gdfgd lorem',
      duration: 56,
      dateObj: Date.now()
    }
  ]

  public counter: number = 0;

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges CoursePage Component', changes);
  }

  public change(): void {
    this.counter = this.counter + 1;
    console.log(this.counter);
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
