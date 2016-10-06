export const RECEIVE_SINGLE_CITY = 'RECEIVE_SINGLE_CITY';
export const REQUEST_SINGLE_CITY = 'REQUEST_SINGLE_CITY';

export const receiveSingleCity = city => ({
	type: RECEIVE_SINGLE_CITY,
	city
});

export const requestSingleCity = id => ({
	type: REQUEST_SINGLE_CITY,
	id
});
