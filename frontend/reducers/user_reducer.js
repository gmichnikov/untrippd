import * as ACTIONS from '../actions/user_actions.js';

const UserReducer = (oldState = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SINGLE_USER:
      return action.user_info;
    case ACTIONS.RECEIVE_LIKED_SUGGESTIONS:
      return action.suggestions.user_info;
    case ACTIONS.TOGGLE_FOLLOW_STATUS:
      let currentFollowStatus = oldState.followed_by_current_user;
      return Object.assign({}, oldState, { followed_by_current_user: !currentFollowStatus });
    default:
      return oldState;
  }
};

export default UserReducer;
