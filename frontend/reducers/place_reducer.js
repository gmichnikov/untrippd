import * as ACTIONS from '../actions/place_actions.js';

const defaultPlacesState = {
  singleCity: {},
  popularCities: [],
  popularCountries: [],
  randomCity: [],
};

const PlaceReducer = (oldState = defaultPlacesState, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SINGLE_CITY:
      return Object.assign({}, oldState, { singleCity: action.city_info });
    case ACTIONS.RECEIVE_POPULAR_CITIES:
      return Object.assign({}, oldState, { popularCities: action.cities.popular_cities });
    case ACTIONS.RECEIVE_POPULAR_COUNTRIES:
      return Object.assign({}, oldState, { popularCountries: action.countries.popular_countries });
    case ACTIONS.RECEIVE_RANDOM_CITY:
      return Object.assign({}, oldState, { randomCity: action.city });
    default:
      return oldState;
  }
};

export default PlaceReducer;
