import { TestBed } from '@angular/core/testing';

import { PostblogService } from './postblog.service';

describe('PostblogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostblogService = TestBed.get(PostblogService);
    expect(service).toBeTruthy();
  });
});
