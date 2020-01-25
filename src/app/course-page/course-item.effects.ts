import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CourseItemActions from './course-item.action';
import { ItemCourseService } from './services/item-course.service';
import { CourseItem } from './models/course-item.model';

@Injectable()
export class CourseItemEffects {
  startIndex: string;
  count: string;
  constructor(private itemService: ItemCourseService, private action$: Actions) {}

  GetCourseItems$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CourseItemActions.BeginGetCourseItemAction),
      mergeMap(action =>
        this.itemService.getItems(this.startIndex, this.count).pipe(
          map((data: CourseItem[]) => {
            return CourseItemActions.SuccessGetCourseItemAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(CourseItemActions.ErrorCourseItemAction(error));
          })
        )
      )
    )
  );

  CreateCourseItems$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CourseItemActions.BeginCreateCourseItemAction),
      mergeMap(action =>
        this.itemService.addItem(action.payload).pipe(
          map((data: CourseItem) => {
            return CourseItemActions.SuccessCreateCourseItemAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(CourseItemActions.ErrorCourseItemAction(error));
          })
        )
      )
    )
  );

  UpdateCourseItems$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CourseItemActions.BeginUpdateCourseItemAction),
      mergeMap(action =>
        this.itemService.updateItem(action.payload).pipe(
          map((data: CourseItem) => {
            return CourseItemActions.SuccessUpdateCourseItemAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(CourseItemActions.ErrorCourseItemAction(error));
          })
        )
      )
    )
  );
}
