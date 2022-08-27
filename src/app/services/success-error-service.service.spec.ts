import { TestBed } from '@angular/core/testing';

import { SuccessErrorServiceService } from './success-error-service.service';

describe('SuccessErrorServiceService', () => {
  let service: SuccessErrorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessErrorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
