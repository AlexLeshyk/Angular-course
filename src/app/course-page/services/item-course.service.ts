import { Injectable } from '@angular/core';
import { CourseItem, Author } from '../models/course-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import {catchError, map, debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemCourseService {
  public currentId: number;
  public items: CourseItem[] = [];
  public authors: Author[] = [];
  count: string;
  startIndex: string;

  constructor(private http: HttpClient) { }

  // get list of authors
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('http://localhost:3004/authors')
    .pipe(
      map(response => {
        return response
      }),
      catchError(error => {
        console.log('Error: ', error.message)
        return throwError(error)
      })
    )
  }

  // Get list
  getItems(): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>('http://localhost:3004/courses', {
      params: {
        'start': this.startIndex,
        'count': this.count
      },
      observe: 'response'
    })
    .pipe(
      map(response => {
        return response.body
      }),
      catchError(error => {
        console.log('Error: ', error.message)
        return throwError(error)
      })
    )
  }

  // Get item by Id
  getItemById(id: number) {
    return this.http.get<CourseItem>(`http://localhost:3004/courses/${id}`);
  }

  // Remove course
  removeItem(course: CourseItem): Observable<void> {
    return this.http.delete<void>(`http://localhost:3004/courses/${course.id}`);
  }

  // Update item
  updateItem(item: CourseItem): Observable<CourseItem> {
    return this.http.put<CourseItem>(`http://localhost:3004/courses/${item.id}`, item);
  }

  // Add course item
  addItem(item: CourseItem): Observable<CourseItem> {
    return this.http.post<CourseItem>('http://localhost:3004/courses', item);
  }

  // Search method
  onSearchItems(inputValue: string): Observable<CourseItem[]> {
    if (inputValue === '') {
      return of([]);
    }
    return this.http.get<CourseItem[]>(`http://localhost:3004/courses?textFragment=${inputValue}`).pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(val => console.log('val',val))
    )
  }

  rememberId(id: number): void {
    this.currentId = id;
  }

  getCurrentId(): number {
    return this.currentId;
  }

  clear() {
    this.items = [];
  }
}
