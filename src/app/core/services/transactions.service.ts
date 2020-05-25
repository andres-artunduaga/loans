import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { ApiService } from '@core/http/api.service';
import { Transaction } from '@core/models/transaction.model';
import { TxType, TxStatus } from '@core/types/transaction.types';
import { tap } from 'rxjs/operators';
import { Credit } from '@core/models/credit.model';

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
    this._globalAmount$ = new BehaviorSubject<number>(this.envService.getEnvironment().initialAmount);
    this.globalAmount$ = this._globalAmount$.asObservable();
    this.getLatestTx().subscribe(
      tx => {
        this._globalAmount$.next(tx[0].total);
      }
    )
  }

  // Add or Reduce the amount of money only if its an approved transaction
  private calculateNewAmount(type: TxType, amount: number, status:TxStatus): number {
    let total = this._globalAmount$.value;
    if( status === "approved" ){
      if (type === 'credit') {
        total -= amount;
      } else if (type === 'payment') {
        total += amount;
      }
    }
    return total;
  }

  createTxFromCredit(credit:Credit){

    const type:TxType = credit.paid ? "payment" : "credit";
    const status:TxStatus = credit.status;
    const amount = credit.amount;
    const total = this.calculateNewAmount(type, amount, status);

    if ( total < 0 ){
      throw throwError("Unable to perform transaction: insufficient balance");
    }
    const transaction: Transaction = {
      timestamp: Date.now(),
      amount,
      type,
      status,
      total,
    };
    return this.api.post<Transaction>(this.serviceEndpoint, transaction).pipe(tap(tx => this.updateTotal(tx.total)));
  }

  updateTotal(total:number){
    console.log("Updating total...");
    this._globalAmount$.next(total);
  }

  getLatestTx(){
    return this.api.get<Transaction[]>(`${this.serviceEndpoint}?_sort=timestamp&_order=desc&_start=0&_end=1`);
  }

}
