import { TestBed } from '@angular/core/testing';

import { SelbuService } from './selbu.service';

describe('SelbuService', () => {
  let service: SelbuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelbuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
