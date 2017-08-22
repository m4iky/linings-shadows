import { TestBed, inject } from '@angular/core/testing';

import { GuardiaURLService } from './guardia-url.service';

describe('GuardiaURLService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardiaURLService]
    });
  });

  it('should be created', inject([GuardiaURLService], (service: GuardiaURLService) => {
    expect(service).toBeTruthy();
  }));
});
