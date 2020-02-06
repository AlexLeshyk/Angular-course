import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { StyleDirective } from './directives/style.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CourseDateComponent } from './components/course-date/course-date.component';
import { CourseLengthComponent } from './components/course-length/course-length.component';
import { AuthorComponent } from './components/author/author.component';

@NgModule({
  declarations: [
    CoursePageComponent,
    CourseItemComponent,
    SearchControlComponent,
    StyleDirective,
    DurationPipe,
    SortPipe,
    AddCoursePageComponent,
    CourseDateComponent,
    CourseLengthComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    CoursePageComponent,
    SearchControlComponent,
    AddCoursePageComponent
  ]
})
export class CoursePageModule { }
