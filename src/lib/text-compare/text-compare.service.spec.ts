import { TestBed } from '@angular/core/testing';

import { TextCompareService } from './text-compare.service';

describe('TextCompareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextCompareService = TestBed.get(TextCompareService);
    expect(service).toBeTruthy();
  });
});
