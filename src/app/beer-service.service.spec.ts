import { TestBed, inject } from '@angular/core/testing';

import { BeerServiceService } from './beer-service.service';

describe('BeerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerServiceService]
    });
  });

  it('should be created', inject([BeerServiceService], (service: BeerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
