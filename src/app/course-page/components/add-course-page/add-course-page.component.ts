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

  @Input() public courseItem: CourseItem;
  @Input() public isSave: boolean;

  constructor(
    private itemCourseService: ItemCourseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.courseItem = this.itemCourseService.getItemById(+params.id);
      console.log(this.courseItem);
    })
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSaveEdit(item: CourseItem) {
    this.itemCourseService.updateItem(item);
    this.router.navigate(['/courses']);
  }

  onSaveAdd(item: CourseItem) {
    this.itemCourseService.addItem(item);
    this.router.navigate(['/courses']);
  }

  updatedate(event) {
    this.courseItem.dateObj = new Date(event);
  }
}
