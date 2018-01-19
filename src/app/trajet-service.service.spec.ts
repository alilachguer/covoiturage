import { TestBed, inject } from '@angular/core/testing';

import { TrajetServiceService } from './trajet-service.service';

describe('TrajetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrajetServiceService]
    });
  });

  it('should be created', inject([TrajetServiceService], (service: TrajetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
