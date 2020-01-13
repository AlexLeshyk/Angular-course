import { Component, OnInit, SimpleChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { ShowParamsService } from '../../services/show-params.service';
import { AuthorizationService } from  '../../../shared/services/authorization.service';
import { SubscriptionLike, Subject } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
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
    private showParamsService: ShowParamsService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthorizationService
  ) { }

  public change(): void {
    this.counter = this.counter + 1;
    console.log(this.counter);
  }

  public onItemDelete(item: CourseItem) {
    // this.itemCourseService.deleteItem(item);
    this.subscriptions.push(this.itemCourseService.removeItem(item)
    .subscribe( () => {
      this.courseItems = this.courseItems.filter( t => t.id !==  item.id);
    }));
    this.fetchItems();
  }

  public onItemAdd() {
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

  fetchItems() {
    this.subscriptions.push(this.itemCourseService.getItems().subscribe(items => {
      this.courseItems = items;
    }, error =>{
      this.error = error.message;
    }
  ));
  }

  onSearch() {
  }

  onShowSecondRow() {
    this.showParamsService.showSecondRowItems();
    this.fetchItems();
  }

  onShowThirdRow() {
    this.showParamsService.showThirdRowItems();
    this.fetchItems();
  }

  onShowFirstRow() {
    this.showParamsService.showFirstRowItems();
    this.fetchItems();
  }

  onShowAllItems() {
    this.showParamsService.showAllItems();
    this.fetchItems();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // console.log('OnChanges CoursePage Component', changes);
  }

  ngOnInit() {
    this.route.queryParams.subscribe( (params: Params) => {
      if (params['loginAgain']) {
        this.message = "Please, login before";
      } else if (params['authFailed']){
        this.message = "Session is overed. Please enter your data again";
      }
    });
    this.fetchItems();

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
