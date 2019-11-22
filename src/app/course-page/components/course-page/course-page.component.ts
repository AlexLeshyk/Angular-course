import { Component, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service'

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy {

  inputValue = 'course';

  courseItems: CourseItem[];

  public counter: number = 0;
  public isShowCourse: boolean = false;

  public ngOnChanges(changes: SimpleChanges): void {
    // console.log('OnChanges CoursePage Component', changes);
  }

  public change(): void {
    this.counter = this.counter + 1;
    console.log(this.counter);
    this.isShowCourse = this.isShowCourse ? false : true;
  }

  constructor(private itemCourseService: ItemCourseService) { }

  getItems(): void {
    this.itemCourseService.getItems().subscribe(items => this.courseItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

  ngOnDestroy() {
  }

  public onItemDelete(item: CourseItem): void {
    this.itemCourseService.removeItem(item);
    console.log(this.itemCourseService.items);
  }

  public onItemAdd() {
    this.itemCourseService.add();
  }

  onValueChanged(value: string) {
    this.inputValue = value;
  }

}
