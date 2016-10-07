export const createSuggestion = (suggestion, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/suggestions',
		data: suggestion,
    success: success,
    error: error
	});
};

export const fetchSingleSuggestion = (id, success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/suggestions/${id}`,
    success: success,
    error: error,
	});
};
