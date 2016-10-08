import * as ACTIONS from '../actions/search_actions';
import * as API from '../util/search_api_util';

export default ({ getState, dispatch }) => next => action => {

  // const errorCallback = xhr => dispatch(ACTIONS.receiveSearchErrors(xhr.responseJSON));
  const errorCallback = xhr => console.log("Search Error", xhr.responseJSON);

  const receiveAllSearchSuccess = searchPlaces => dispatch(ACTIONS.receiveAllSearchPlaces(searchPlaces));

  switch(action.type) {
    case ACTIONS.REQUEST_ALL_SEARCH_PLACES:
      API.fetchAllSearchPlaces(receiveAllSearchSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
