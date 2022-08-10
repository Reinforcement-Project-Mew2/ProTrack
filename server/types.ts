import { ObjectId } from 'mongodb';

export type ServerError = {
  log: string,
  status?: number,
  message?: { err: string}
  method: Function, 
  type: string,
  err: string,
}

export type User = {
  user_id: string,
}

export interface UserModel {
  user_id: {
    username: String,
    first_name: String,
    last_name: String ,
    password: String,
    created_on: Date ,
    email: String 
  }
}