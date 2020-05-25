import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENVIRONMENT } from '@core/constants/tokens';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ENVIRONMENT, useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
