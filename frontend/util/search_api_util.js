export const fetchAllSearchPlaces = (success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/search`,
    success: success,
    error: error,
	});
};

export const fetchFilteredSearchPlaces = (query, success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/search/${query}`,
    success: success,
    error: error,
	});
};
