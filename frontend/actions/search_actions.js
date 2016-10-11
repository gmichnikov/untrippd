export const REQUEST_ALL_SEARCH_PLACES = 'REQUEST_ALL_SEARCH_PLACES';
export const REQUEST_FILTERED_SEARCH_PLACES = 'REQUEST_FILTERED_SEARCH_PLACES';
export const RECEIVE_ALL_SEARCH_PLACES = 'RECEIVE_ALL_SEARCH_PLACES';

export const requestAllSearchPlaces = () => ({
  type: REQUEST_ALL_SEARCH_PLACES,
});

export const requestFilteredSearchPlaces = (query) => ({
  type: REQUEST_FILTERED_SEARCH_PLACES,
  query: query
});

export const receiveAllSearchPlaces = (searchPlaces) => ({
	type: RECEIVE_ALL_SEARCH_PLACES,
  searchPlaces
});
