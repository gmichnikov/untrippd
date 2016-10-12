export const fetchSingleCity = (place_type, id, success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/${place_type}/${id}`,
    success: success,
    error: error,
	});
};

export const fetchPopularCities = (success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/cities/popular`,
    success: success,
    error: error,
	});
};

export const fetchRandomCity = (success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/cities/explore`,
    success: success,
    error: error,
	});
};
