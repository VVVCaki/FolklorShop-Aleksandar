import { TestBed } from '@angular/core/testing';

import { ZastitaService } from './zastita.service';

describe('ZastitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZastitaService = TestBed.get(ZastitaService);
    expect(service).toBeTruthy();
  });
});