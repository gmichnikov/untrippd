import * as ACTIONS from '../actions/user_actions.js';
import * as SESSION_ACTIONS from '../actions/session_actions.js';

const UserReducer = (oldState = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SINGLE_USER:
      return action.user_info;
    case ACTIONS.RECEIVE_LIKED_SUGGESTIONS:
      return action.suggestions.user_info;
    case ACTIONS.TOGGLE_FOLLOW_STATUS:
      let currentFollowStatus = oldState.followed_by_current_user;
      return Object.assign({}, oldState, { followed_by_current_user: !currentFollowStatus });
    case SESSION_ACTIONS.INCREASE_CURRENT_USER_FOLLOWS:
      let incNumFollowers = oldState.num_followers;
      let increasedFollowers = oldState.followers;
      if (oldState.id === action.id) {
        incNumFollowers = oldState.num_followers + 1;
        let currentUserItem = {
          current_user_follows_user: true,
          display_name: window.currentUser.display_name,
          id: window.currentUser.id,
          username: currentUser.username,
        }
        increasedFollowers = increasedFollowers.concat([currentUserItem])
      }
      return Object.assign({}, oldState, { num_followers: incNumFollowers, followers: increasedFollowers })
    case SESSION_ACTIONS.DECREASE_CURRENT_USER_FOLLOWS:
      let decNumFollowers = oldState.num_followers;
      if (oldState.id === action.id) {
        decNumFollowers = oldState.num_followers - 1;
      }
      let decreasedFollowers = oldState.followers.filter((follower) => {
        return follower.id !== window.currentUser.id;
      });
      return Object.assign({}, oldState, { num_followers: decNumFollowers, followers: decreasedFollowers })
    default:
      return oldState;
  }
};

export default UserReducer;
