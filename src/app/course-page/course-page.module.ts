import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { StyleDirective } from './directives/style.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CoursePageComponent, CourseItemComponent, SearchControlComponent, StyleDirective, DurationPipe, FilterPipe, SortPipe, AddCoursePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    CoursePageComponent,
    SearchControlComponent,
    AddCoursePageComponent
  ]
})
export class CoursePageModule { }
