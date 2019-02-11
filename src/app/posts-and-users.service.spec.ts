import { TestBed } from '@angular/core/testing';

import { PostsAndUsersService } from './posts-and-users.service';

describe('PostsAndUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsAndUsersService = TestBed.get(PostsAndUsersService);
    expect(service).toBeTruthy();
  });
});
