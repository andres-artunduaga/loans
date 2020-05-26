import { Injectable } from '@angular/core';

import { Credit } from '@core/models/credit.model';
import { ApiService } from '@core/services/api.service';
import { TransactionsService } from '@core/services/transactions.service';
import { PaidStatus } from '@core/types/credit.types';
import { toCamelCase } from '@core/utils/rx-ops';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CreditService {
  serviceEndpoint = 'credits';

  constructor(private api: ApiService, private txService: TransactionsService) {}

  getCredits(): Observable<Credit[]> {
    return this.api.get<Credit[]>(`${this.serviceEndpoint}`).pipe(toCamelCase());
  }

  getApprovedCreditsWithUsers(filterByPaidStatus?: PaidStatus): Observable<Credit[]> {
    let endpoint = `${this.serviceEndpoint}?_expand=user&status=approved`;
    if (filterByPaidStatus) {
      endpoint += `&paid=${filterByPaidStatus === 'paid'}`;
    }
    return this.api.get<Credit[]>(endpoint).pipe(toCamelCase());
  }

  getRejectedCreditsWithUsers(): Observable<Credit[]> {
    const endpoint = `${this.serviceEndpoint}?_expand=user&status=rejected`;
    return this.api.get<Credit[]>(endpoint).pipe(toCamelCase());
  }

  saveCredit(credit: Credit): Observable<Credit> {
    return this.api.post<Credit>(`${this.serviceEndpoint}`, credit).pipe(
      tap(crd => this.txService.createTxFromCredit(crd).subscribe(_ => {})),
      toCamelCase(),
    );
  }

  updateCreditPayment(credit: Credit): Observable<Credit> {
    return this.api.put<Credit>(`${this.serviceEndpoint}/${credit.id}`, credit).pipe(
      tap(crd => this.txService.createTxFromCredit(crd).subscribe(_ => {})),
      toCamelCase(),
    );
  }
}
