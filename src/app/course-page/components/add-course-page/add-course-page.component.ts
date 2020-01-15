import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursePageComponent implements OnInit, OnDestroy {
  public storageProperty: CourseItem;
  public isNewCourse: boolean;
  @Input() public courseItem: CourseItem;
  @Input() public isSave: boolean;

  courseItems: CourseItem[];
  subscriptions: SubscriptionLike[] = [];

  constructor(
    private itemCourseService: ItemCourseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.isNewCourse = !params.id;
      if (!this.isNewCourse) {
        // this.courseItem = this.itemCourseService.getItemById(params.id);
        this.route.data.subscribe( data => {
          this.courseItem = data.course
        })

      } else {
        this.courseItem = {
          name: '',
          length: 0,
          id: 999,
          date: Date.now(),
          description: '',
          topRated: false
        }
      }
      this.storageProperty = {
        name: this.courseItem.name,
        length: this.courseItem.length,
        date: this.courseItem.date,
        description: this.courseItem.description,
        id: this.courseItem.id,
        topRated: this.courseItem.topRated
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

  onCancel() {
    this.courseItem.name = this.storageProperty.name;
    this.courseItem.length = this.storageProperty.length;
    this.courseItem.date = this.storageProperty.date;
    this.courseItem.description = this.storageProperty.description;
    this.courseItem.id = this.storageProperty.id;
    this.courseItem.topRated = this.storageProperty.topRated;
    this.router.navigate(['/courses']);
    this.itemCourseService.currentId = undefined;
  }

  onSaveEdit(item: CourseItem) {
    this.subscriptions.push(this.itemCourseService.updateItem(item).subscribe( item => {
      this.courseItem.id = item.id;
    }));
    this.router.navigate(['/courses']);
    this.itemCourseService.currentId = undefined;
  }

  onSaveAdd() {
    if (this.isNewCourse) {
      this.subscriptions.push(this.itemCourseService.addItem(this.courseItem).subscribe( item => {
        this.courseItems.push(item);
      }));
    }
    this.router.navigate(['/courses']);
  }

  updatedate(event) {
    this.courseItem.date = new Date(event);
  }
}
