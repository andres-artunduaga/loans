import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { EnvironmentService } from './environment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENVIRONMENT } from '@core/constants/tokens';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, EnvironmentService, { provide: ENVIRONMENT, useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
