import { TestBed } from '@angular/core/testing';

import { EnvironmentService } from './environment.service';
import { Environment } from 'environments/environment';
import { ENVIRONMENT } from '../constants/tokens';

describe('EnvironmentService', () => {
  let service: EnvironmentService;
  const env: Environment = {
    production: false,
    apiUrl: 'http://api.url:9999',
    initialAmount: 100000,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ENVIRONMENT, useValue: env }],
    });
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
