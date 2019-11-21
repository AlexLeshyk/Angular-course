import { Component, OnInit, Input, Output, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit, OnChanges {

  @Input() public courseItem: CourseItem;
  @Input() public counter: number;
  @Output('onDeleteItem') onDelete: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor() {
  }

  public ngOnInit(): void {
    console.log('OnInit CourseItem Component');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges CourseItem Component', changes);
  }

  public delete(): void {
    this.onDelete.emit(this.courseItem);
  }

}
