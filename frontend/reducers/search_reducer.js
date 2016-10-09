import * as ACTIONS from '../actions/search_actions.js';

const SearchReducer = (oldState = null, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_ALL_SEARCH_PLACES:
      return action.searchPlaces;
    default:
      return oldState;
  }
};

export default SearchReducer;
