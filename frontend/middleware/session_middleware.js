import * as SESSION_ACTIONS from '../actions/session_actions.js';
import * as API from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {

  const successCallback = user => dispatch(SESSION_ACTIONS.receiveCurrentUser(user));

  const signupErrorCallback = xhr => dispatch(SESSION_ACTIONS.receiveSignupErrors(xhr.responseJSON));

  const loginErrorCallback = xhr => dispatch(SESSION_ACTIONS.receiveLoginErrors(xhr.responseJSON));

  const logoutSuccess = () => dispatch(SESSION_ACTIONS.removeCurrentUser());

  switch(action.type) {
    case SESSION_ACTIONS.SIGNUP:
      API.signup(action.user, successCallback, signupErrorCallback);
      return next(action);
    case SESSION_ACTIONS.LOGIN:
      API.login(action.user, successCallback, loginErrorCallback);
      return next(action);
    case SESSION_ACTIONS.LOGOUT:
      API.logout(logoutSuccess, loginErrorCallback);
      return next(action);
    default:
      return next(action);
  }
};
