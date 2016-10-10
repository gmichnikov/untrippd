import * as ACTIONS from '../actions/user_actions.js';

const UserReducer = (oldState = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SINGLE_USER:
      return action.user_info;
    default:
      return oldState;
  }
};

export default UserReducer;
