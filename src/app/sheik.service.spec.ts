import { TestBed } from '@angular/core/testing';

import { SheikService } from './sheik.service';

describe('SheikService', () => {
  let service: SheikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
