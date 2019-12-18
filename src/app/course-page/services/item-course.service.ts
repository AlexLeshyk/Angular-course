import { Injectable } from '@angular/core';
import { CourseItem } from '../models/course-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemCourseService {

  public items: CourseItem[] = [
    {
      id: 1,
      title: 'Video converting course',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 130,
      dateObj: Date.parse("January 26, 2020"),
      topRated: false
    },
    {
      id: 2,
      title: 'React in other life course',
      description: 'some text here',
      duration: 40,
      dateObj: Date.parse("Nov 12, 2019"),
      topRated: false
    },
    {
      id: 3,
      title: 'Awesome course', description: 'fdf gsdsf dgfdfgdf dhdghrqertqrt tretw',
      duration: 95,
      dateObj: Date.parse("Feb 20, 2020"),
      topRated: false
    },
    {
      id: 4,
      title: 'Angular course',
      description: 'fggdfg dgfdfg gdfgd lorem',
      duration: 56,
      dateObj: Date.parse("Nov 3, 2019"),
      topRated: false
    },
    {
      id: 5,
      title: 'Javascript language course',
      description: 'fggdfg dgfdfg gdfgd lorem',
      duration: 67,
      dateObj: Date.parse("Nov 11, 2019"),
      topRated: true
    },
    {
      id: 6,
      title: 'Some more else course',
      description: 'fggdfg dgfdfg gdfgd lorem',
      duration: 202,
      dateObj: Date.parse("Oct 30, 2019"),
      topRated: true
    }
  ]

  public newCourseItem: CourseItem = {
    id: 13,
    title: "vsddssd",
    description: "text should be here",
    duration: 0,
    dateObj: Date.parse("Oct 31, 2019"),
    topRated: true
  }

  constructor() { }

  // Get list
  public getItems(): CourseItem[] {
    return this.items;
  }

  // Get item by Id
  getItemById(id: number) {
    return this.items.filter((course: CourseItem) => course.id == id);
  }

  removeItem(item: CourseItem) {
    this.items = this.items.filter((course: CourseItem) => course.id !== item.id);
  }

  // Update item
  updateItem(item: CourseItem) {
    item.title = item.title + ' updated';
    item.topRated = !item.topRated;
    return item;
  }

  // Remove item
  deleteItem(item: CourseItem) {
    let confirmation = prompt("Do you really want to delete this course? Yes/No", "");
    let index: number = this.items.indexOf(item);
    if (index !== -1 && confirmation.toLowerCase()=="yes") {
      this.items.splice(index, 1);
    } else {
      console.log("This course won't be deleted");
    }
  }

  // Creat course
  addItem(): void {
    this.items.unshift(this.newCourseItem);
  }

  clear() {
    this.items = [];
  }
}
