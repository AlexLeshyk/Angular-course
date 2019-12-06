import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursePageComponent implements OnInit {
  @Output() onCancelEdit = new EventEmitter<void>();
  @Output() onSaveEdit: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();
  @Input() public courseItem: CourseItem;

  constructor(private itemCourseService: ItemCourseService) { }

  ngOnInit() {
  }

  onCancel() {
    this.onCancelEdit.emit();
  }

  onSave(item: CourseItem) {
    this.onSaveEdit.emit(item);
    this.itemCourseService.getItemById(item.id);
    this.itemCourseService.updateItem(item);
  }

  updatedate(event) {
    this.courseItem.dateObj = new Date(event);
  }
}
