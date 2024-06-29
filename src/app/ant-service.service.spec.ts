import { TestBed } from '@angular/core/testing';

import { AntServiceService } from './ant-service.service';

describe('AntServiceService', () => {
  let service: AntServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
