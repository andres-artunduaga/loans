// id field will be used automatically by the database server

import { Credit } from './credit.model';

export interface User {
  id?: number,
  name: string,
  uid: number, // cedula
  email: string,
  status:string,
  credits?: Credit[]
}