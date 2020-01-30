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
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  form : FormGroup;

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
          isTopRated: false
        }
      }
      this.storageProperty = {
        name: this.courseItem.name,
        length: this.courseItem.length,
        date: this.courseItem.date,
        description: this.courseItem.description,
        id: this.courseItem.id,
        isTopRated: this.courseItem.isTopRated
      }
    });
    this.form = new FormGroup({
      courseName: new FormControl(this.courseItem.name, [Validators.maxLength(50),Validators.required]),
      description: new FormControl(this.courseItem.description, [Validators.maxLength(500),Validators.required]),
      length: new FormControl(this.courseItem.length),
      courseId: new FormControl(this.courseItem.id),
      courseDate: new FormControl(this.courseItem.date)
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log('Form', this.form, this.form.controls.courseDate.value);
    const formData = {...this.form.value}
    console.log('Form Data', formData);
    const item: CourseItem = {
      name: this.form.value.courseName,
      length: this.form.value.length,
      date: this.form.value.courseDate,
      description: this.form.value.description,
      id: this.form.value.courseId,
      isTopRated: this.courseItem.isTopRated
    }
    if (this.isNewCourse) {
      this.store.dispatch(CourseItemActions.BeginCreateCourseItemAction({ payload: item }));
    } else {
      this.store.dispatch(CourseItemActions.BeginUpdateCourseItemAction({ payload: item }));
      this.itemCourseService.currentId = undefined;
    }
    this.router.navigate(['/courses']);
    this.loadService.showLoad();
  }

  onCancel() {
    this.courseItem.name = this.storageProperty.name;
    this.courseItem.length = this.storageProperty.length;
    this.courseItem.date = this.storageProperty.date;
    this.courseItem.description = this.storageProperty.description;
    this.courseItem.id = this.storageProperty.id;
    this.courseItem.isTopRated = this.storageProperty.isTopRated;
    this.router.navigate(['/courses']);
    this.itemCourseService.currentId = undefined;
  }
}
