import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ENVIRONMENT } from '@core/constants/tokens';
import { ApiService } from '@core/services/api.service';
import { Environment } from 'environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  const env: Environment = {
    production: false,
    apiUrl: 'http://api.url:9999',
    initialAmount: 100000,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ENVIRONMENT, useValue: env }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
