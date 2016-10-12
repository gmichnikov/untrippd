import * as ACTIONS from '../actions/place_actions.js';

const defaultPlacesState = {
  singleCity: {},
  popularCities: [],
  // singleRegion: {},
  // regions: [],
  // singleCountry: {},
  // countries: [],
};

const PlaceReducer = (oldState = defaultPlacesState, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SINGLE_CITY:
      return Object.assign({}, oldState, { singleCity: action.city_info });
    case ACTIONS.RECEIVE_POPULAR_CITIES:
      console.log("Action.cities", action);
      return Object.assign({}, oldState, { popularCities: action.cities.popular_cities });
    default:
      return oldState;
  }
};

export default PlaceReducer;
