import { TestBed } from '@angular/core/testing';

import { CreditService } from './credit.service';
import { ENVIRONMENT } from '@core/constants/tokens';
import { EnvironmentService } from './environment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
