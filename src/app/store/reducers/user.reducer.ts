import { User } from 'src/app/models/user.model';
import * as fromUser from '../actions';

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function userReducer(state: UserState = initState, action: fromUser.userActions) {
  switch (action.type) {
    case fromUser.LOAD_USER:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUser.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: {...action.user},
        error: null
      };
    case fromUser.LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        user: null,
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
