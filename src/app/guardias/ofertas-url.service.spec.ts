import { TestBed, inject } from '@angular/core/testing';

import { OfertasUrlService } from './ofertas-url.service';

describe('OfertasUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfertasUrlService]
    });
  });

  it('should be created', inject([OfertasUrlService], (service: OfertasUrlService) => {
    expect(service).toBeTruthy();
  }));
});
