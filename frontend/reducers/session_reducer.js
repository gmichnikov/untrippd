import * as SESSION_ACTIONS from '../actions/session_actions.js';

const default_session_state = {
  currentUser: null,
  loginErrors: [],
  signupErrors: [],
};

const SessionReducer = (oldstate = default_session_state, action) => {
  switch (action.type) {
    case SESSION_ACTIONS.RECEIVE_CURRENT_USER:
      return {currentUser: action.user, loginErrors: [], signupErrors: []};
    case SESSION_ACTIONS.RECEIVE_LOGIN_ERRORS:
      return {currentUser: null, loginErrors: action.loginErrors, signupErrors: []};
    case SESSION_ACTIONS.RECEIVE_SIGNUP_ERRORS:
      return {currentUser: null, loginErrors: [], signupErrors: action.signupErrors};
    case SESSION_ACTIONS.REMOVE_CURRENT_USER:
      return {currentUser: null, loginErrors: [], signupErrors: []};
    default:
      return oldstate;
  }
};

export default SessionReducer;
