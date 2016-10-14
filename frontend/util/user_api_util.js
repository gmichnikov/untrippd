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

export const fetchLikedSuggestions = (username, success, error) => {
	console.log("util", username);
	$.ajax({
		method: 'GET',
  	url: `/api/users/${username}/likes`,
    success: success,
    error: error,
	});
};
