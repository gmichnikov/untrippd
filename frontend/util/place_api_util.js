export const fetchSingleCity = (place_type, id, success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/${place_type}/${id}`,
    success: success,
    error: error,
	});
};
