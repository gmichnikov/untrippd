export const createSuggestion = (suggestion, success, error) => {
	console.log(suggestion);
	$.ajax({
		method: 'POST',
		url: '/api/suggestions',
		contentType: false,
		processData: false,
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

export const fetchAllSuggestions = (success, error) => {
	$.ajax({
		method: 'GET',
  	url: `/api/suggestions`,
    success: success,
    error: error,
	});
};

export const destroySingleSuggestion = (id, success, error) => {
	$.ajax({
		method: 'DELETE',
  	url: `/api/suggestions/${id}`,
    success: success,
    error: error,
	});
};


export const likeSuggestion = (id, success) => {
	$.ajax({
		method: 'POST',
  	url: `/api/suggestions/${id}/like`,
    success: success,
	});
};

export const unlikeSuggestion = (id, success) => {
	$.ajax({
		method: 'POST',
  	url: `/api/suggestions/${id}/unlike`,
    success: success,
	});
};
