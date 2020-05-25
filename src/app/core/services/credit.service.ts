import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@core/http/api.service';
import { User } from '@core/models/user.model';
import { Credit } from '@core/models/credit.model';
import { toCamelCase } from '@core/utils/rx-ops';
import { PaidStatus } from '@core/types/credit.types';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  serviceEndpoint = 'credits';

  constructor(private api: ApiService) {}

  getCredits(): Observable<Credit[]> {
    return this.api.get<Credit[]>(`${this.serviceEndpoint}`).pipe(toCamelCase());
  }

  getApprovedCreditsWithUsers( filterByPaidStatus?:PaidStatus ): Observable<Credit[]> {
    let endpoint = `${this.serviceEndpoint}?_expand=user&status=approved`;
    if ( filterByPaidStatus ){
      endpoint+=`&paid=${ filterByPaidStatus === "paid" }`
    }
    return this.api.get<Credit[]>(endpoint).pipe(toCamelCase());
  }

  getRejectedCreditsWithUsers(): Observable<Credit[]> {
    const endpoint = `${this.serviceEndpoint}?_expand=user&status=rejected`;
    return this.api.get<Credit[]>(endpoint).pipe(toCamelCase());
  }

  saveCredit(credit: Credit):Observable<Credit>{
    return this.api.post<User>(`${this.serviceEndpoint}`, credit).pipe(toCamelCase());
  }
}
