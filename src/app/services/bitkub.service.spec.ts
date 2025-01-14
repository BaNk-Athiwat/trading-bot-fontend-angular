/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BitkubService } from './bitkub.service';

describe('Service: Bitkub', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitkubService]
    });
  });

  it('should ...', inject([BitkubService], (service: BitkubService) => {
    expect(service).toBeTruthy();
  }));
});
