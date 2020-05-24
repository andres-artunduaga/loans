// id field will be used automatically by the database server

export interface User {
  id?: number,
  name: string,
  uid: number, // cedula
  email: string,
}