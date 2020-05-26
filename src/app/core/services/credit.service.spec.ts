import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ENVIRONMENT } from '@core/constants/tokens';
import { CreditService } from './credit.service';
import { EnvironmentService } from './environment.service';

describe('CreditService', () => {
  let service: CreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditService, EnvironmentService, { provide: ENVIRONMENT, useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
