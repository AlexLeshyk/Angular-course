import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CoursePageModule } from './course-page/course-page.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CourseItemReducer } from './course-page/course-item.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseItemEffects } from './course-page/course-item.effects';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursePageModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ course_items: CourseItemReducer }),
    EffectsModule.forRoot([CourseItemEffects])
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
