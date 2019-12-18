import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/components/course-page/course-page.component';
import { AddCoursePageComponent } from './course-page/components/add-course-page/add-course-page.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { AuthGuard } from './auth.guard';
import { CourseResolver } from './course-resolver.guard';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard]},
  {
    path: 'courses/:id',
    component: AddCoursePageComponent,
    resolve: {
      course: CourseResolver
    },
    canActivate: [AuthGuard]
  },
  {path: 'error', component: NotFoundComponent},
  {path: '**', redirectTo: '/error' }
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
