export const REQUEST_ALL_SEARCH_PLACES = 'REQUEST_ALL_SEARCH_PLACES';
export const RECEIVE_ALL_SEARCH_PLACES = 'RECEIVE_ALL_SEARCH_PLACES';

export const requestAllSearchPlaces = () => ({
  type: REQUEST_ALL_SEARCH_PLACES,
});

export const receiveAllSearchPlaces = (searchPlaces) => ({
	type: RECEIVE_ALL_SEARCH_PLACES,
  searchPlaces
});
