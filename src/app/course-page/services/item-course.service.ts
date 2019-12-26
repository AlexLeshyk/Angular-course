import { Injectable } from '@angular/core';
import { CourseItem } from '../models/course-item.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemCourseService {
  public currentId: number;
  public items: CourseItem[] = [];

  constructor(private http: HttpClient) { }

  // Get list
  getItems(): Observable<CourseItem[]> {
    let params = new HttpParams();
    params.append('start', '0');
    params.append('count', '10');

    return this.http.get<CourseItem[]>('http://localhost:3004/courses?start=10&count=3', {params: params});
  }

  // Get item by Id
  getItemById(id: number) {
    // return this.items.find((course: CourseItem) => course.id === id);
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

  // Delete item old
  deleteItem(item: CourseItem) {
    let confirmation = prompt("Do you really want to delete this course? Yes/No", "");
    let index: number = this.items.indexOf(item);
    if (index !== -1 && confirmation.toLowerCase()=="yes") {
      this.items.splice(index, 1);
    } else {
      console.log("This course won't be deleted");
    }
  }

  // Add course item
  addItem(item: CourseItem): Observable<CourseItem> {
    return this.http.post<CourseItem>('http://localhost:3004/courses', item);
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
