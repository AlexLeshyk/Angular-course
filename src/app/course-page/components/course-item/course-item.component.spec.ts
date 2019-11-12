import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CourseItem } from '../../models/course-item.model';
import { By } from '@angular/platform-browser';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.courseItem = {
        id: 1,
        title: 'one',
        description: 'one',
        dateObj: 'Feb 25, 2018',
        duration: 12
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete course by id with event emitter property', () => {
      let result = null;
      component.onDelete.subscribe(value => result = value.id);
      component.delete();
      expect(result).toBe(component.courseItem.id);
  });

  let expectedCourse = {
      id: 1,
      title: 'one',
      description: 'one',
      dateObj: 'Feb 25, 2018',
      duration: 12
  };

  it('should raises the deleted event when clicked', () => {
    const component = new CourseItemComponent();
    const courseEl: CourseItem = {id: 1, title: 'one', description: 'one', dateObj: 'Feb 25, 2018', duration: 12 };
    component.courseItem = courseEl;

    component.onDelete.subscribe((selectedHero: CourseItem) => expect(selectedHero).toBe(courseEl));
    component.delete();
  });

  it('should raise deleted event when cicked on button (triggerEventHandler)', () => {
    let selectedCourse: CourseItem;
    const courseDe: DebugElement = fixture.debugElement.query(By.css('.delete-btn'));
    component.onDelete.subscribe((course: CourseItem) => selectedCourse = course);
    courseDe.triggerEventHandler('click', null);
    expect(selectedCourse).toEqual(expectedCourse);
  });

  it('should raise deleted event when clicked (element.click)', () => {
    let selectedCourse: CourseItem;
    const courseEl = fixture.nativeElement.querySelector('.delete-btn');
    component.onDelete.subscribe((hero: CourseItem) => selectedCourse = hero);
    courseEl.click();
    expect(selectedCourse).toEqual(expectedCourse);
  });
});
