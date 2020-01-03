import { Injectable } from '@angular/core';
import { ItemCourseService } from './item-course.service';

@Injectable({
  providedIn: 'root'
})
export class ShowParamsService {

  constructor(
    private itemCourseService: ItemCourseService
  ) { }

  showSecondRowItems() {
    this.itemCourseService.start = '5';
    this.itemCourseService.count = '5';
  }

  showThirdRowItems() {
    this.itemCourseService.start = '10';
    this.itemCourseService.count = '5';
  }

  showFirstRowItems() {
    this.itemCourseService.start = '0';
    this.itemCourseService.count = '5';
  }

  showAllItems() {
    // this.itemCourseService.count = '';
    this.itemCourseService.start = '';
    this.itemCourseService.count = String(parseInt(this.itemCourseService.count) + 5);
    console.log('Nastia',this.itemCourseService.count);
  }
}
