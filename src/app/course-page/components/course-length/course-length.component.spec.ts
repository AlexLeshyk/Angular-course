import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLengthComponent } from './course-length.component';

describe('CourseLengthComponent', () => {
  let component: CourseLengthComponent;
  let fixture: ComponentFixture<CourseLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
