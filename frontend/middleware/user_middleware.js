import * as ACTIONS from '../actions/user_actions.js';
import * as API from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {

  const receiveSingleUserSuccess = user => dispatch(ACTIONS.receiveSingleUser(user));
  // const errorCallback = xhr => dispatch(ACTIONS.???(xhr.responseJSON));

  switch(action.type) {
    case ACTIONS.REQUEST_SINGLE_USER:
      API.fetchSingleUser(action.username, receiveSingleUserSuccess);
      return next(action);
    default:
      return next(action);
  }
};
