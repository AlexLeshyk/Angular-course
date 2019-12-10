import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/components/course-page/course-page.component';
import { AddCoursePageComponent } from './course-page/components/add-course-page/add-course-page.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursePageComponent},
  {path: 'courses/new', component: AddCoursePageComponent},
  {path: 'courses/:id', component: AddCoursePageComponent},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
