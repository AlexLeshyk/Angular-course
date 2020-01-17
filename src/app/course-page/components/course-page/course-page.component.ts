import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { AuthorizationService } from  '../../../shared/services/authorization.service';
import { LoadingService }  from '../../../shared/services/loading.service';
import { SubscriptionLike, Subject } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy {

  public inputValue = '';
  message: string;
  error: '';
  courseItems: CourseItem[] = [];
  private searchTextChanged = new Subject<string>();

  public counter: number = 0;
  subscriptions: SubscriptionLike[] = [];

  constructor(
    private itemCourseService: ItemCourseService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthorizationService,
    private loadService: LoadingService
  ) { }

  public change(): void {
    this.counter = this.counter + 1;
    console.log(this.counter);
  }

  public onItemDelete(item: CourseItem) {
    this.subscriptions.push(this.itemCourseService.removeItem(item)
    .subscribe( () => {
    }));
    this.fetchItems('0','5');
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

  onSearch() {
  }

  ngOnInit() {
    this.route.queryParams.subscribe( (params: Params) => {
      if (params['loginAgain']) {
        this.message = "Please, login before";
      } else if (params['authFailed']){
        this.message = "Session is overed. Please enter your data again";
      }
    });
    this.fetchItems('0','5');

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
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

}
