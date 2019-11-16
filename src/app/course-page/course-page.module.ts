import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { StyleDirective } from './directives/style.directive'

@NgModule({
  declarations: [CoursePageComponent, CourseItemComponent, StyleDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CoursePageComponent
  ]
})
export class CoursePageModule { }
