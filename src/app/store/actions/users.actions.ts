import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERS = '[Users] Load users';
export const LOAD_USERS_FAIL = '[Users] Load users fail';
export const LOAD_USERS_SUCCESS = '[Users] Load users success';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor(public error: any) { }
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public users: User[]) { }
}

export type usersActions = LoadUsers |
                      LoadUsersFail |
                      LoadUsersSuccess;
