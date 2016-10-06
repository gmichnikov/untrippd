export const fetchSingleCity = (id, success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/cities/${id}`,
    success: success,
    error: error,
	});
};
