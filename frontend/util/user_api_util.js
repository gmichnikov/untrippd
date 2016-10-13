export const fetchSingleUser = (username, success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/users/${username}`,
    success: success,
    error: error,
	});
};

export const followUser = (id, success) => {
	$.ajax({
		method: 'POST',
  	url: `/api/users/${id}/follow`,
    success: success,
	});
};

export const unfollowUser = (id, success) => {
	$.ajax({
		method: 'POST',
  	url: `/api/users/${id}/unfollow`,
    success: success,
	});
};

export const fetchLikedSuggestions = (id, success, error) => {
	console.log("util", id);
	$.ajax({
		method: 'GET',
  	url: `/api/users/${id}/likes`,
    success: success,
    error: error,
	});
};
