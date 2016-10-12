export const RECEIVE_SINGLE_CITY = 'RECEIVE_SINGLE_CITY';
export const REQUEST_SINGLE_CITY = 'REQUEST_SINGLE_CITY';
export const REQUEST_POPULAR_CITIES = 'REQUEST_POPULAR_CITIES';
export const RECEIVE_POPULAR_CITIES = 'RECEIVE_POPULAR_CITIES';
export const REQUEST_RANDOM_CITY = 'REQUEST_RANDOM_CITY';
export const RECEIVE_RANDOM_CITY = 'RECEIVE_RANDOM_CITY';

export const receiveSingleCity = (city) => ({
	type: RECEIVE_SINGLE_CITY,
	city_info: city.city_info,
	suggestions: city.suggestions,
});

export const requestSingleCity = (place_type, id) => ({
	type: REQUEST_SINGLE_CITY,
	place_type,
	id
});

export const requestPopularCities = () => ({
	type: REQUEST_POPULAR_CITIES,
});

export const receivePopularCities = (cities) => ({
	type: RECEIVE_POPULAR_CITIES,
	cities
});

export const requestRandomCity = () => ({
	type: REQUEST_RANDOM_CITY,
});

export const receiveRandomCity = (city) => ({
	type: RECEIVE_RANDOM_CITY,
	city
});
