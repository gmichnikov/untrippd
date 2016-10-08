export const fetchAllSearchPlaces = (success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/search`,
    success: success,
    error: error,
	});
};
