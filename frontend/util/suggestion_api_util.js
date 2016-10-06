export const createSuggestion = (suggestion, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/suggestions',
		data: suggestion,
    success: success,
    error: error
	});
};
