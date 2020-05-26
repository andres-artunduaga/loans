import { Injectable } from '@angular/core';

import { Credit } from '@core/models/credit.model';
import { Transaction } from '@core/models/transaction.model';
import { ApiService } from '@core/services/api.service';
import { EnvironmentService } from '@core/services/environment.service';
import { TxStatus, TxType } from '@core/types/transaction.types';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  // tslint:disable-next-line: variable-name
  private _globalAmount$: BehaviorSubject<number>;
  // tslint:disable-next-line: variable-name
  globalAmount$: Observable<number>;

  serviceEndpoint = 'transactions';

  constructor(private envService: EnvironmentService, private api: ApiService) {
    this._globalAmount$ = new BehaviorSubject<number>(
      this.envService.getEnvironment().initialAmount,
    );
    this.globalAmount$ = this._globalAmount$.asObservable();
    this.getLatestTx().subscribe(tx => {
      if( tx.length && tx[0].total){
        this._globalAmount$.next(tx[0].total);
      }
    });
  }

  // Add or Reduce the amount of money only if its an approved transaction
  private calculateNewAmount(type: TxType, amount: number, status: TxStatus): number {
    let total = this._globalAmount$.value;
    if (status === 'approved') {
      if (type === 'credit') {
        total -= amount;
      } else if (type === 'payment') {
        total += amount;
      }
    }
    return total;
  }

  createTxFromCredit(credit: Credit) {
    const type: TxType = credit.paid ? 'payment' : 'credit';
    const status: TxStatus = credit.status;
    const amount = credit.amount;
    const total = this.calculateNewAmount(type, amount, status);

    if (total < 0) {
      return throwError('TransactionService:: Unable to perform transaction, insufficient balance');
    }
    const transaction: Transaction = {
      timestamp: Date.now(),
      amount,
      type,
      status,
      total,
    };
    return this.api.post<Transaction>(this.serviceEndpoint, transaction).pipe(
      tap(tx => {
        if (tx.total) {
          this.updateTotal(tx.total);
        }
      }),
    );
  }

  updateTotal(total: number) {
    this._globalAmount$.next(total);
  }

  getLatestTx() {
    return this.api.get<Transaction[]>(
      `${this.serviceEndpoint}?_sort=timestamp&_order=desc&_start=0&_end=1`,
    );
  }
}
