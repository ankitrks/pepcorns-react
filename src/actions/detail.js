import { authConstants } from '../constants/details';
import { authHandlers } from 'api_handlers/details';

export const authActions = {
    getDetailsData
}
function getDetailsData() {
    return (dispatch) => {
        dispatch(request());
    
        return authHandlers.getDetailsData(userData).then(
          (result) => {
            dispatch(success(result));
          },
          (error) => {
            dispatch(failure());
          },
        );
      };
    
      function request() {
        return { type: authConstants.LOGIN_REQUEST };
      }
      function success(user) {
        return { type: authConstants.LOGIN_SUCCESS, user };
      }
      function failure() {
        return { type: authConstants.LOGIN_FAILURE };
      }
}