import { Injectable, Inject } from '@angular/core';
import { ENVIRONMENT } from '@core/constants/tokens';
import { Environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor(@Inject(ENVIRONMENT) private environment: Environment) {}

  getEnvironment(): Environment {
    return this.environment;
  }
}
