import * as ACTIONS from '../actions/place_actions.js';
import * as API from '../util/place_api_util';

export default ({ getState, dispatch }) => next => action => {

  const receiveSingleCitySuccess = city => dispatch(ACTIONS.receiveSingleCity(city));
  // const errorCallback = xhr => dispatch(ACTIONS.???(xhr.responseJSON));

  switch(action.type) {
    case ACTIONS.REQUEST_SINGLE_CITY:
      API.fetchSingleCity(action.place_type, action.id, receiveSingleCitySuccess);
      return next(action);
    default:
      return next(action);
  }
};
