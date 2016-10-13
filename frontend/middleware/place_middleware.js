import * as ACTIONS from '../actions/place_actions.js';
import * as API from '../util/place_api_util';

export default ({ getState, dispatch }) => next => action => {

  const receiveSingleCitySuccess = (city) => dispatch(ACTIONS.receiveSingleCity(city));

  const receivePopularCitiesSuccess = (cities) => {
    return dispatch(ACTIONS.receivePopularCities(cities));
  }

  const receivePopularCountriesSuccess = (countries) => {
    return dispatch(ACTIONS.receivePopularCountries(countries));
  }
  // const errorCallback = xhr => dispatch(ACTIONS.???(xhr.responseJSON));
  const receiveRandomCitySuccess = (city) => dispatch(ACTIONS.receiveRandomCity(city));



  switch(action.type) {
    case ACTIONS.REQUEST_SINGLE_CITY:
      API.fetchSingleCity(action.place_type, action.id, receiveSingleCitySuccess);
      return next(action);
    case ACTIONS.REQUEST_POPULAR_CITIES:
      API.fetchPopularCities(receivePopularCitiesSuccess);
      return next(action);
    case ACTIONS.REQUEST_POPULAR_COUNTRIES:
      API.fetchPopularCountries(receivePopularCountriesSuccess);
      return next(action);
    case ACTIONS.REQUEST_RANDOM_CITY:
      API.fetchRandomCity(receiveRandomCitySuccess);
      return next(action);
    default:
      return next(action);
  }
};
