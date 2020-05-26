// id field will be used automatically by the database server

import { CreditStatus } from '@core/types/credit.types';
import { Credit } from './credit.model';

export interface User {
  id?: number,
  name: string,
  uid: number, // cedula
  email: string,
  status:CreditStatus,
  credits?: Credit[]
}