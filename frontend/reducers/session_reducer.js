import * as SESSION_ACTIONS from '../actions/session_actions.js';

const default_session_state = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (oldstate = default_session_state, action) => {
  switch (action.type) {
    case SESSION_ACTIONS.RECEIVE_CURRENT_USER:
      return {currentUser: action.user, errors: []};
    case SESSION_ACTIONS.RECEIVE_ERRORS:
      return {currentUser: null, errors: action.errors};
    case SESSION_ACTIONS.REMOVE_CURRENT_USER:
      return {currentUser: null, errors: []};
    default:
      return oldstate;
  }
};

export default SessionReducer;
