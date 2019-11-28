import { Component, OnInit, Input, Output, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from  '../../services/item-course.service';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit, OnChanges {

  @Input() public courseItem: CourseItem;
  @Input() public counter: number;
  @Output('onDeleteItem') onDelete: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor(
    private itemCourseService: ItemCourseService
  ) {
  }

  public ngOnInit(): void {
    // console.log('OnInit CourseItem Component');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    //console.log('OnChanges CourseItem Component', changes);
  }

  public deleteCourseItem(): void {
    // this.itemCourseService.removeItem(this.courseItem);
    this.onDelete.emit(this.courseItem);
  }

}
