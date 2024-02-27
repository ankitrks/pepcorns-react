import { authConstants } from '../constants/auth';

export function details(state = { user: {}, loading: false }, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstants.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case authConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case authConstants.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case authConstants.STORE_USER_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
}
