import * as SESSION_ACTIONS from '../actions/session_actions.js';
import * as API from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {

  const successCallback = user => dispatch(SESSION_ACTIONS.receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(SESSION_ACTIONS.receiveErrors(xhr.responseJSON));
  const logoutSuccess = () => dispatch(SESSION_ACTIONS.removeCurrentUser());

  switch(action.type) {
    case SESSION_ACTIONS.SIGNUP:
      API.signup(action.user, successCallback, errorCallback);
      return next(action);
    case SESSION_ACTIONS.LOGIN:
      API.login(action.user, successCallback, errorCallback);
      return next(action);
    case SESSION_ACTIONS.LOGOUT:
      API.logout(logoutSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
