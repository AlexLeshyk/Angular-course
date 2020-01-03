import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursePageComponent implements OnInit {
  public storageProperty: CourseItem;
  public isNewCourse: boolean;
  @Input() public courseItem: CourseItem;
  @Input() public isSave: boolean;

  constructor(
    private itemCourseService: ItemCourseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.isNewCourse = !params.id;
      if (!this.isNewCourse) {
        // this.courseItem = this.itemCourseService.getItemById(+params.id);
        this.route.data.subscribe( data => {
          this.courseItem = data.course
        })

      } else {
        this.courseItem = {
          title: '',
          duration: 0,
          id: 999,
          dateObj: Date.now(),
          description: '',
          topRated: false
        }
      }
      this.storageProperty = {
        title: this.courseItem.title,
        duration: this.courseItem.duration,
        dateObj: this.courseItem.dateObj,
        description: this.courseItem.description,
        id: this.courseItem.id,
        topRated: this.courseItem.topRated
      }
    })
  }

  onCancel() {
    this.courseItem.title = this.storageProperty.title;
    this.courseItem.duration = this.storageProperty.duration;
    this.courseItem.dateObj = this.storageProperty.dateObj;
    this.courseItem.description = this.storageProperty.description;
    this.courseItem.id = this.storageProperty.id;
    this.courseItem.topRated = this.storageProperty.topRated;
    this.router.navigate(['/courses']);
    this.itemCourseService.currentId = undefined;
  }

  onSaveEdit(item: CourseItem) {
    this.itemCourseService.updateItem(item);
    this.router.navigate(['/courses']);
    this.itemCourseService.currentId = undefined;
  }

  onSaveAdd() {
    if (this.isNewCourse) {
      this.itemCourseService.addItem(this.courseItem);
    }
    this.router.navigate(['/courses']);
  }

  updatedate(event) {
    this.courseItem.dateObj = new Date(event);
  }
}
