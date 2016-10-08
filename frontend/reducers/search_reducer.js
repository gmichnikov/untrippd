import * as ACTIONS from '../actions/search_actions.js';

const default_search_state = {
  search: [],
};

const SearchReducer = (oldState = default_search_state, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_ALL_SEARCH_PLACES:
      return action.searchPlaces;
    default:
      return oldState;
  }
};

export default SearchReducer;
