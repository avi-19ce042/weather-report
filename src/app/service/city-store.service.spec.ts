import { TestBed } from '@angular/core/testing';

import { CityStoreService } from '../service/city-store.service';

describe('CityStoreService', () => {
  let service: CityStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
