import { Component, OnInit, SimpleChanges, OnDestroy, ViewChild } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy {

  @ViewChild(CourseItem, {static: true})
  inputValue = 'course';

  courseItems: CourseItem[];

  public counter: number = 0;
  public isShowCourse: boolean = false;

  itemsSub: Subscription;

  public ngOnChanges(changes: SimpleChanges): void {
    // console.log('OnChanges CoursePage Component', changes);
  }

  public change(): void {
    this.counter = this.counter + 1;
    console.log(this.counter);
    // this.isShowCourse = this.isShowCourse ? false : true;
  }

  constructor(private itemCourseService: ItemCourseService) { }

  public onItemDelete(item): void {
    this.itemCourseService.deleteItem(item);
    // console.log(this.itemCourseService.items);
    // console.log(this.courseItems);
  }

  public onItemAdd() {
    this.itemCourseService.add();
    this.isShowCourse = this.isShowCourse ? false : true;
  }

  onValueChanged(value: string) {
    this.inputValue = value;
  }

  ngOnInit() {
    this.itemsSub = this.itemCourseService.getItems().subscribe(items => {
      this.courseItems = items;
    })
  }

  ngOnDestroy() {
    if (this.itemsSub) {
      this.itemsSub.unsubscribe();
    }
  }

}
