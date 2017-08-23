import { TestBed, inject } from '@angular/core/testing';

import { LoginUrlService } from './login-url.service';

describe('LoginUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginUrlService]
    });
  });

  it('should be created', inject([LoginUrlService], (service: LoginUrlService) => {
    expect(service).toBeTruthy();
  }));
});
