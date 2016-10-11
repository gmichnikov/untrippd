import * as USER_ACTIONS from '../actions/user_actions.js';
import * as SESSION_ACTIONS from '../actions/session_actions.js';
import * as API from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {

  const receiveSingleUserSuccess = user => dispatch(USER_ACTIONS.receiveSingleUser(user));
  // const errorCallback = xhr => dispatch(ACTIONS.???(xhr.responseJSON));
  const followAndUnfollowSuccess = (id) => dispatch(SESSION_ACTIONS.adjustCurrentUserFollows(id));


  switch(action.type) {
    case USER_ACTIONS.REQUEST_SINGLE_USER:
      API.fetchSingleUser(action.username, receiveSingleUserSuccess);
      return next(action);
    case USER_ACTIONS.FOLLOW_USER:
      API.followUser(action.id, followAndUnfollowSuccess);
      return next(action);
    case USER_ACTIONS.UNFOLLOW_USER:
      API.unfollowUser(action.id, followAndUnfollowSuccess);
      return next(action);
    default:
      return next(action);
  }
};
