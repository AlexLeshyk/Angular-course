import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { LoadingService }  from '../../../shared/services/loading.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SubscriptionLike, Observable } from 'rxjs';
import { Router } from '@angular/router';
import CourseItemState from '../../state/course-item.state';
import * as CourseItemActions from '../../course-item.action';
import { select, Store } from '@ngrx/store';

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

  courseItems: CourseItem[];
  subscriptions: SubscriptionLike[] = [];
  items$: Observable<CourseItemState>;

  constructor(
    private itemCourseService: ItemCourseService,
    private route: ActivatedRoute,
    private router: Router,
    private loadService: LoadingService,
    private store: Store<{ course_items: CourseItemState }>
  ) {
    this.items$ = store.pipe(select('course_items'));
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.isNewCourse = !params.id;
      if (!this.isNewCourse) {
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
    this.store.dispatch(CourseItemActions.BeginUpdateCourseItemAction({ payload: item }));
    this.router.navigate(['/courses']);
    this.itemCourseService.currentId = undefined;
    this.loadService.showLoad();
  }

  onSaveAdd() {
    if (this.isNewCourse) {
      this.store.dispatch(CourseItemActions.BeginCreateCourseItemAction({ payload: this.courseItem }));
    }
    this.router.navigate(['/courses']);
    this.loadService.showLoad();
  }

  updatedate(event) {
    this.courseItem.date = new Date(event);
  }
}
