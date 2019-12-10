import { Component, OnInit, SimpleChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePageComponent implements OnInit, OnDestroy {

  public inputValue = '';

  courseItems: CourseItem[];

  public counter: number = 0;
  public isShowCourse: boolean = false;

  itemsSub: Subscription;

  constructor(
    private itemCourseService: ItemCourseService,
    private router: Router
  ) { }

  public change(): void {
    this.counter = this.counter + 1;
    console.log(this.counter);
    // this.isShowCourse = this.isShowCourse ? false : true;
  }

  public onItemDelete(item: CourseItem): void {
    this.itemCourseService.deleteItem(item);
  }

  public onItemAdd() {
    // this.itemCourseService.addItem();
    this.router.navigate(['/courses/new']);
    this.isShowCourse = this.isShowCourse ? false : true;
  }

  onValueChanged(value: string) {
    this.inputValue = value;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // console.log('OnChanges CoursePage Component', changes);
  }

  ngOnInit() {
    this.courseItems = this.itemCourseService.getItems();
  }

  ngOnDestroy() {
    if (this.itemsSub) {
      this.itemsSub.unsubscribe();
    }
  }

}
