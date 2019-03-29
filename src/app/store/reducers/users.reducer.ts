import { User } from 'src/app/models/user.model';
import * as fromUsers from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usersReducer(state: UsersState = initState, action: fromUsers.usersActions) {
  switch (action.type) {
    case fromUsers.LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUsers.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.users],
        error: null
      };
    case fromUsers.LOAD_USERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        users: [],
        error: {
          status: action.error.status,
          message: action.error.message,
          url: action.error.url,
        }
      };
    default:
      return state;
  }
}
