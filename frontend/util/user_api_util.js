export const fetchSingleUser = (id, success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/users/${id}`,
    success: success,
    error: error,
	});
};
