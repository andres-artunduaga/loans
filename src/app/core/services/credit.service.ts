import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@core/http/api.service';
import { User } from '@core/models/user.model';
import { Credit } from '@core/models/credit.model';
import { toSnakeCase } from '@core/utils/object-transformers';
import { toCamelCase } from '@core/utils/rx-ops';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  serviceEndpoint = 'credits';

  constructor(private api: ApiService) {}

  getCredits(): Observable<Credit[]> {
    return this.api.get<Credit[]>(`${this.serviceEndpoint}`).pipe(toCamelCase());
  }

  saveCredit(credit: Credit):Observable<Credit>{
    return this.api.post<User>(`${this.serviceEndpoint}`, credit).pipe(toCamelCase());
  }
}
