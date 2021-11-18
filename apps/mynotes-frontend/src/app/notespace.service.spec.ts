import { TestBed } from '@angular/core/testing';

import { NotespaceService } from './notespace.service';

describe('NotespaceService', () => {
  let service: NotespaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotespaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
