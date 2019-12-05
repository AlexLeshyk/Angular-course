import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {
  @Output() onCancelEdit = new EventEmitter<void>();
  @Input() public courseItem: CourseItem;

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.onCancelEdit.emit();
  }

  onSave() {
  }
}
