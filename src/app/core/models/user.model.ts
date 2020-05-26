// id field will be used automatically by the database server

import { Credit } from '@core/models/credit.model';
import { CreditStatus } from '@core/types/credit.types';

export interface User {
  id?: number,
  name: string,
  uid: number, // cedula
  email: string,
  status:CreditStatus,
  credits?: Credit[]
}