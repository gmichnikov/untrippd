import * as ACTIONS from '../actions/place_actions.js';

const defaultPlacesState = {
  singleCity: {},
  cities: [],
  singleRegion: {},
  regions: [],
  singleCountry: {},
  countries: [],
};

const PlaceReducer = (oldState = defaultPlacesState, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SINGLE_CITY:
      return Object.assign({}, oldState, { singleCity: action.city });
    default:
      return oldState;
  }
};

export default PlaceReducer;
