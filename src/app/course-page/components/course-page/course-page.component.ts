import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { AuthorizationService } from  '../../../shared/services/authorization.service';
import { LoadingService }  from '../../../shared/services/loading.service';
import { SubscriptionLike, Subject, Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as CourseItemActions from '../../course-item.action';
import CourseItemState from '../../state/course-item.state';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy {

  public inputValue = '';
  message: string;
  error: '';
  startIndex: string = '0';
  count: string = '5';
  courseItems: CourseItem[] = [];
  private searchTextChanged = new Subject<string>();
  items$: Observable<CourseItemState>;
  courseItemError: Error = null;

  subscriptions: SubscriptionLike[] = [];

  constructor(
    private itemCourseService: ItemCourseService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthorizationService,
    private loadService: LoadingService,
    private store: Store<{ course_items: CourseItemState }>
  ) {
    this.items$ = store.pipe(select('course_items'));
  }

  public onItemDelete(item: CourseItem) {
    this.subscriptions.push(this.itemCourseService.removeItem(item)
    .subscribe( () => {
    }));
    this.fetchItems(this.startIndex,this.count);
  }

  public onItemAdd() {
    this.loadService.showLoad();
    this.router.navigate(['/courses/new']);
  }

  onValueChanged(value: string) {
    this.inputValue = value;

    this.router.navigate(['/courses'],{
      queryParams : {
        textFragment: this.inputValue
      }
    });

    this.searchTextChanged.next(this.inputValue);
  }

  fetchItems(startIndex: string, count: string) {
    this.subscriptions.push(this.itemCourseService.getItems(startIndex,count).subscribe(items => {
      this.courseItems = items;
    }, error =>{
      this.error = error.message;
    }
  ));
  }

  ngOnInit() {
    this.route.queryParams.subscribe( (params: Params) => {
      if (params['loginAgain']) {
        this.message = "Please, login before";
      } else if (params['authFailed']){
        this.message = "Session is overed. Please enter your data again";
      }
    });
    // this.fetchItems(this.startIndex,this.count);

    this.subscriptions.push(this.items$
      .pipe(
        map(x => {
          this.courseItems = x.CourseItems;
          this.courseItemError = x.CourseItemError;
        })
      ).subscribe());

      this.subscriptions.push(this.searchTextChanged
        .pipe(
          debounceTime(1000),
          distinctUntilChanged()
        ).subscribe(value => {
          this.inputValue = value;

          if (this.inputValue.trim() && this.inputValue.length > 2 ) {
            this.itemCourseService.onSearchItems(this.inputValue)
              .subscribe(items => {
                this.courseItems = items;
            });
          }
        }));

    this.store.dispatch(CourseItemActions.BeginGetCourseItemAction());

  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

}
