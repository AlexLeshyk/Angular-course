import { Component, OnInit, Input, Output, SimpleChanges, OnChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { AuthorizationService } from  '../../../shared/services/authorization.service';
import { ItemCourseService } from '../../services/item-course.service';
import { LoadingService }  from '../../../shared/services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit, OnChanges {

  @Input() public courseItem: CourseItem;
  @Input() public counter: number;
  @Output('onDeleteItem') onDelete: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor(
    private auth: AuthorizationService,
    private router: Router,
    private itemService: ItemCourseService,
    private loadService: LoadingService
  ) {
  }

  public ngOnInit(): void {
    // console.log('OnInit CourseItem Component');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    //console.log('OnChanges CourseItem Component', changes);
  }

  public deleteCourseItem(): void {
    if (this.auth.getAutorizationValue()) {
      let confirmation = prompt("Do you really want to delete this course? Yes/No", "");
      if (confirmation.toLowerCase() === "yes") {
        this.onDelete.emit(this.courseItem);
      } else {
        console.log("This course won't be deleted", confirmation);
      }
    }
  }

  public updateCourseItem(): void {
    // if (this.auth.getAutorizationValue()) {
    //   this.itemService.rememberId(this.courseItem.id);
    // }

    this.itemService.rememberId(this.courseItem.id);
    this.loadService.loadingBlock();
    this.router.navigate(['/courses', this.courseItem.id]);
  }

}
