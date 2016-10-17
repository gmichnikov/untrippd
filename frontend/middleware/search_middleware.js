import * as ACTIONS from '../actions/search_actions';
import * as API from '../util/search_api_util';

export default ({ getState, dispatch }) => next => action => {

  const receiveAllSearchSuccess = searchPlaces => dispatch(ACTIONS.receiveAllSearchPlaces(searchPlaces));

  switch(action.type) {
    case ACTIONS.REQUEST_ALL_SEARCH_PLACES:
      API.fetchAllSearchPlaces(receiveAllSearchSuccess);
      return next(action);
    case ACTIONS.REQUEST_FILTERED_SEARCH_PLACES:
      API.fetchFilteredSearchPlaces(action.query, receiveAllSearchSuccess);
      return next(action);
    default:
      return next(action);
  }
};
