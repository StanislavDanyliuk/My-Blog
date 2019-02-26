import { TestBed } from '@angular/core/testing';

import { postsAndUsersService } from './posts-and-users.service';

describe('PostsAndUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: postsAndUsersService = TestBed.get(postsAndUsersService);
    expect(service).toBeTruthy();
  });
});
