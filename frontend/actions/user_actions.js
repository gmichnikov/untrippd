export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const REQUEST_SINGLE_USER = 'REQUEST_SINGLE_USER';

export const receiveSingleUser = (user) => ({
	type: RECEIVE_SINGLE_USER,
	user_info: user.user_info,
	suggestions: user.suggestions,
});

export const requestSingleUser = (id) => ({
	type: REQUEST_SINGLE_USER,
	id
});
