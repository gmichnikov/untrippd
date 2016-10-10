export const fetchSingleUser = (username, success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/users/${username}`,
    success: success,
    error: error,
	});
};
