import { Component, OnInit, SimpleChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { ShowParamsService } from '../../services/show-params.service';
import { AuthorizationService } from  '../../services/authorization.service';
import { SubscriptionLike } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePageComponent implements OnInit, OnDestroy {

  public inputValue = '';

  courseItems: CourseItem[] = [];

  public counter: number = 0;
  subscriptions: SubscriptionLike[] = [];

  constructor(
    private itemCourseService: ItemCourseService,
    private showParamsService: ShowParamsService,
    private router: Router,
    private http: HttpClient,
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
  }

  fetchItems() {
    this.subscriptions.push(this.itemCourseService.getItems().subscribe(items => {
      this.courseItems = items;
    }));
  }

  onSearch() {
    this.router.navigate(['/courses'],{
      queryParams : {
        textFragment: this.inputValue
      }
    });

    this.subscriptions.push(this.http.get<CourseItem[]>(`http://localhost:3004/courses?textFragment=${this.inputValue}`)
      .subscribe(items => {
        this.courseItems = items;
    }));
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
    // this.courseItems = this.itemCourseService.getItems();
    this.fetchItems();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

}
