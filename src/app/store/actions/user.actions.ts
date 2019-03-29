import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USER = '[User] Load user';
export const LOAD_USER_FAIL = '[User] Load user fail';
export const LOAD_USER_SUCCESS = '[User] Load user success';

export class LoadUser implements Action {
  readonly type = LOAD_USER;

  constructor(public id: string) { }
}

export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;

  constructor(public error: any) { }
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;

  constructor(public user: User) { }
}

export type userActions = LoadUser |
                          LoadUserFail |
                          LoadUserSuccess;
