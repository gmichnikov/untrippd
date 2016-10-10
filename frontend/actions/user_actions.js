export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const REQUEST_SINGLE_USER = 'REQUEST_SINGLE_USER';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const TOGGLE_FOLLOW_STATUS = 'TOGGLE_FOLLOW_STATUS';

export const receiveSingleUser = (user) => ({
	type: RECEIVE_SINGLE_USER,
	user_info: user.user_info,
	suggestions: user.suggestions,
});

export const requestSingleUser = (username) => ({
	type: REQUEST_SINGLE_USER,
	username
});

export const followUser = (id) => ({
	type: FOLLOW_USER,
	id
});

export const unfollowUser = (id) => ({
	type: UNFOLLOW_USER,
	id
});

export const toggleFollowStatus = () => ({
	type: TOGGLE_FOLLOW_STATUS,
});
