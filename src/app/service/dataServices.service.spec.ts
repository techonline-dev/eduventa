import { TestBed } from '@angular/core/testing';

import { dataServices } from './dataServices.service';

describe('dataServices', () => {
  let service: dataServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dataServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
