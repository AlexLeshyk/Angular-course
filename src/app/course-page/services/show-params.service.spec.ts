import { TestBed } from '@angular/core/testing';

import { ShowParamsService } from './show-params.service';

describe('ShowParamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowParamsService = TestBed.get(ShowParamsService);
    expect(service).toBeTruthy();
  });
});
