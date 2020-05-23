import { InjectionToken } from '@angular/core';
import { Environment } from "environments/environment";

export const ENVIRONMENT = new InjectionToken<Environment>('Environment object');
