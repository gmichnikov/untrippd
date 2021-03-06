import * as SESSION_ACTIONS from '../actions/session_actions.js';
import * as SUGGESTION_ACTIONS from '../actions/suggestion_actions.js';

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
      return Object.assign({}, oldState, {currentUser: null, signupErrors: action.signupErrors});
    case SESSION_ACTIONS.REMOVE_CURRENT_USER:
      return Object.assign({}, oldState, {currentUser: null, loginErrors: [], signupErrors: []});
    case SESSION_ACTIONS.CHANGE_WELCOME_NOTIFICATION:
      return Object.assign({}, oldState, {welcomeNotificationStatus: action.status});
    case SESSION_ACTIONS.INCREASE_CURRENT_USER_FOLLOWS:
    case SESSION_ACTIONS.DECREASE_CURRENT_USER_FOLLOWS:
      let prevIds = oldState.currentUser.followeds_ids;
      let newIds;
      if (prevIds.indexOf(action.id) === -1) {
        newIds = prevIds.concat([action.id]);
      } else {
        prevIds.splice(prevIds.indexOf(action.id), 1)
        newIds = prevIds;
      }
      let newCurrentUser = Object.assign({}, oldState.currentUser, {followeds_ids: newIds})
      return Object.assign({}, oldState, { currentUser: newCurrentUser });

    case SUGGESTION_ACTIONS.INCREMENT_CURRENT_USER_SUGGESTION_LIKES:
    case SUGGESTION_ACTIONS.DECREMENT_CURRENT_USER_SUGGESTION_LIKES:
      let prevLikedSuggestionIds = oldState.currentUser.liked_suggestion_ids;
      let newLikedSuggestionIds;
      if (prevLikedSuggestionIds.indexOf(action.id) === -1) {
        newLikedSuggestionIds = prevLikedSuggestionIds.concat([action.id]);
      } else {
        newLikedSuggestionIds = prevLikedSuggestionIds.filter((id) => {
          return id !== action.id;
        });
      }
      let newCurrentUserLikes = Object.assign({}, oldState.currentUser, {liked_suggestion_ids: newLikedSuggestionIds});
      return Object.assign({}, oldState, { currentUser: newCurrentUserLikes });
    default:
      return oldState;
  }
};

export default SessionReducer;
