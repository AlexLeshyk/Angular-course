import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
      component.onDelete.subscribe(value => result = value);
      component.delete();
      expect(result).toBe(component.courseItem.id);
  });
});
