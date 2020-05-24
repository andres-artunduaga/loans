import { CreditStatus } from '@core/types/credit.types';

export interface Credit {
  id?: number,
  userId?: number,
  amount: number,
  status?: CreditStatus,
  paid?: boolean,
  paymentDate?: string, // UTC String
}