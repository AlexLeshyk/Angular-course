import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { StyleDirective } from './directives/style.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CourseDateComponent } from './components/course-date/course-date.component';

@NgModule({
  declarations: [CoursePageComponent, CourseItemComponent, SearchControlComponent, StyleDirective, DurationPipe, FilterPipe, SortPipe, AddCoursePageComponent, CourseDateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
