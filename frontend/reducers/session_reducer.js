import * as SESSION_ACTIONS from '../actions/session_actions.js';

const default_session_state = {
  currentUser: null,
  loginErrors: [],
  signupErrors: [],
  welcomeNotificationStatus: null,
};

const SessionReducer = (oldState = default_session_state, action) => {
  switch (action.type) {
    case SESSION_ACTIONS.RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {currentUser: action.user, loginErrors: [], signupErrors: []});
    case SESSION_ACTIONS.RECEIVE_LOGIN_ERRORS:
      return Object.assign({}, oldState, {currentUser: null, loginErrors: action.loginErrors});
    case SESSION_ACTIONS.RECEIVE_SIGNUP_ERRORS:
      return Obejct.assign({}, oldState, {currentUser: null, signupErrors: action.signupErrors});
    case SESSION_ACTIONS.REMOVE_CURRENT_USER:
      return Object.assign({}, oldState, {currentUser: null, loginErrors: [], signupErrors: []});
    case SESSION_ACTIONS.CHANGE_WELCOME_NOTIFICATION:
      return Object.assign({}, oldState, {welcomeNotificationStatus: action.status});
    default:
      return oldState;
  }
};

export default SessionReducer;
