/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BitkubApiSecureService } from './bitkub-api-secure.service';

describe('Service: BitkubApiSecure', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitkubApiSecureService]
    });
  });

  it('should ...', inject([BitkubApiSecureService], (service: BitkubApiSecureService) => {
    expect(service).toBeTruthy();
  }));
});
