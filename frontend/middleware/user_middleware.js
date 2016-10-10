import * as ACTIONS from '../actions/user_actions.js';
import * as API from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {

  const receiveSingleUserSuccess = user => dispatch(ACTIONS.receiveSingleUser(user));
  // const errorCallback = xhr => dispatch(ACTIONS.???(xhr.responseJSON));
  const followAndUnfollowSuccess = () => dispatch(ACTIONS.toggleFollowStatus());


  switch(action.type) {
    case ACTIONS.REQUEST_SINGLE_USER:
      API.fetchSingleUser(action.username, receiveSingleUserSuccess);
      return next(action);
    case ACTIONS.FOLLOW_USER:
      API.followUser(action.id, followAndUnfollowSuccess);
      return next(action);
    case ACTIONS.UNFOLLOW_USER:
      API.unfollowUser(action.id, followAndUnfollowSuccess);
      return next(action);
    default:
      return next(action);
  }
};
