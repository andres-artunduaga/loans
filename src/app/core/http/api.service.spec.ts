import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { ENVIRONMENT } from '../constants/tokens';
import { Environment } from 'environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
