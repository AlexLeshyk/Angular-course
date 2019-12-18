import { TestBed } from '@angular/core/testing';

import { ItemCourseService } from './item-course.service';

describe('ItemCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemCourseService = TestBed.get(ItemCourseService);
    expect(service).toBeTruthy();
  });
});
