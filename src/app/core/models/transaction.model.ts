import { TxType, TxStatus } from '@core/types/transaction.types';

export interface Transaction {
  timestamp: number,
  type: TxType,
  amount: number,
  total: number,
  status: TxStatus
}