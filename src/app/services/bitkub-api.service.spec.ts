/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BitkubApiService } from './bitkub-api.service';

describe('Service: BitkubApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitkubApiService]
    });
  });

  it('should ...', inject([BitkubApiService], (service: BitkubApiService) => {
    expect(service).toBeTruthy();
  }));
});
